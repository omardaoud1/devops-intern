# Kubernetes Deployment

## Overview
The application is deployed on Azure Kubernetes Service (AKS) using declarative YAML manifests for each service.

## Services Deployed
- **Backend**: Node.js/Express API service
- **Frontend**: React application  
- **Database**: MongoDB instance
- **Ingress**: Nginx ingress controller

## Deployment Strategy
- Rolling updates for zero-downtime deployments
- ConfigMap and Secret management
- Service discovery and load balancing
