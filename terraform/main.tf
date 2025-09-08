terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}

  subscription_id = "3d2a25fa-fccc-4048-9ffe-2d434b0c9dcc"
  tenant_id       = "dbd6664d-4eb9-46eb-99d8-5c43ba153c61"
}


# 1️⃣ Resource Group
resource "azurerm_resource_group" "doctor_rg" {
  name     = var.resource_group_name
  location = var.location
}

# 2️⃣ Virtual Network
resource "azurerm_virtual_network" "doctor_vnet" {
  name                = var.vnet_name
  address_space       = var.vnet_cidr
  location            = azurerm_resource_group.doctor_rg.location
  resource_group_name = azurerm_resource_group.doctor_rg.name
}

# 3️⃣ Subnet
resource "azurerm_subnet" "doctor_subnet" {
  name                 = var.subnet_name
  resource_group_name  = azurerm_resource_group.doctor_rg.name
  virtual_network_name = azurerm_virtual_network.doctor_vnet.name
  address_prefixes     = var.subnet_cidr
}


# Grant GitHub Actions access to ACR
#resource "azurerm_role_assignment" "github_acr_push" {
# scope                = azurerm_container_registry.doctor_acr.id
#  role_definition_name = "AcrPush"
 # principal_id         = "YOUR_PRINCIPAL_ID_HERE" # This needs to be your GitHub OIDC identity
#}
# 4️⃣ Azure Container Registry (ACR)
resource "azurerm_container_registry" "doctor_acr" {
  name                = "${var.acr_name_prefix}${random_integer.suffix.result}"
  resource_group_name = azurerm_resource_group.doctor_rg.name
  location            = azurerm_resource_group.doctor_rg.location
  sku                 = var.acr_sku
  admin_enabled       = var.acr_admin_enabled
}

# Random suffix to make ACR name unique
resource "random_integer" "suffix" {
  min = 10000
  max = 99999
}

# 5️⃣ AKS Cluster
resource "azurerm_kubernetes_cluster" "aks" {
  name                = var.aks_name
  location            = azurerm_resource_group.doctor_rg.location
  resource_group_name = azurerm_resource_group.doctor_rg.name
  dns_prefix          = var.dns_prefix

  default_node_pool {
    name       = "default"
    node_count = var.node_count
    vm_size    = var.vm_size
  }

  identity {
    type = "SystemAssigned"
  }


  network_profile {
    network_plugin    = "azure"
    load_balancer_sku = "standard"
  }

  depends_on = [
    azurerm_container_registry.doctor_acr
  ]
}

