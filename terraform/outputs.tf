output "resource_group_name" {
  value = azurerm_resource_group.doctor_rg.name
}

output "aks_name" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "acr_name" {
  value = azurerm_container_registry.doctor_acr.name
}

output "vnet_name" {
  value = azurerm_virtual_network.doctor_vnet.name
}

output "subnet_name" {
  value = azurerm_subnet.doctor_subnet.name
}

