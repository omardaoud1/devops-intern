# CI/CD Pipeline with GitHub Actions

## Overview
The CI/CD pipeline automates the entire process from code commit to production deployment on Azure Kubernetes Service (AKS).

## Workflows
- **terraform.yml**: Provisions Azure infrastructure using Terraform
- **ci-multi.yml**: Builds, tests, and deploys application services

## Key Features
- Automated infrastructure provisioning
- Multi-service container builds
- Security scanning with Trivy
- Automated deployment to AKS
