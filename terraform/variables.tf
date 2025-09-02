# ===== Core / Region =====
variable "resource_group_name" {
  description = "Name of the Azure Resource Group"
  type        = string
  default     = "doctor-resource-group"
}

variable "location" {
  description = "Azure region where resources will be deployed"
  type        = string
  default     = "East US"
}

# ===== Networking =====
variable "vnet_name" {
  description = "Virtual Network name."
  type        = string
  default     = "doctor-vnet"
}

variable "vnet_cidr" {
  description = "CIDR(s) for the VNet."
  type        = list(string)
  default     = ["10.0.0.0/16"]
}

variable "subnet_name" {
  description = "Subnet name."
  type        = string
  default     = "doctor-subnet"
}

variable "subnet_cidr" {
  description = "CIDR(s) for the subnet."
  type        = list(string)
  default     = ["10.0.1.0/24"]
}

# ===== ACR =====
variable "acr_name_prefix" {
  description = "Prefix for the ACR name (random suffix is appended to ensure uniqueness)."
  type        = string
  default     = "doctoracr"
}

variable "acr_sku" {
  description = "SKU for ACR"
  type        = string
  default     = "Basic"
}

variable "acr_admin_enabled" {
  description = "Enable admin (username/password) for ACR"
  type        = bool
  default     = true
}

# ===== AKS =====
variable "aks_name" {
  description = "AKS cluster name."
  type        = string
  default     = "doctor-aks-cluster"
}

variable "dns_prefix" {
  description = "DNS prefix for AKS."
  type        = string
  default     = "doctoraks"
}

variable "node_count" {
  description = "Default node count in the system pool."
  type        = number
  default     = 1
}

variable "vm_size" {
  description = "VM size for the AKS node(s)."
  type        = string
  default     = "Standard_B2s"
}

