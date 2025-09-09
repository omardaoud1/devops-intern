# System Architecture

## Overview
This project implements a complete DevOps pipeline for a multi-service web application on Microsoft Azure. The architecture consists of four main layers:

1.  **Infrastructure Layer:** Provisioned with Terraform (IaC)
2.  **Containerization Layer:** Dockerized services
3.  **Orchestration Layer:** Kubernetes (AKS)  
4.  **Automation Layer:** CI/CD via GitHub Actions

## Diagram
┌────────────────┐
│  GitHub Repo   │
│ (Source Code)  │
└────────┬───────┘
         │
         ▼
┌────────────────┐
│ GitHub Actions │
│  (CI/CD Pipe)  │
└────────┬───────┘
         ├─────────────────┐
         ▼                 ▼
┌────────────────┐   ┌────────────────┐
│   Terraform    │   │  Docker Build  │
│ (Infrastructure)│  │ (Containerize) │
└────────┬───────┘   └────────┬───────┘
         │                    │
         ▼                    ▼
┌────────────────┐   ┌────────────────┐
│  Azure Cloud   │   │ Azure Container│
│   (AKS, VNet)  │   │ Registry (ACR) │
└────────┬───────┘   └────────┬───────┘
         │                    │
         └─────────┬──────────┘
                   ▼
           ┌────────────────┐
           │  Application   │
           │    on AKS      │
           ├────────────────┤
           │ React Frontend │
           │ Node.js Backend│
           │   MongoDB      │
           └────────────────┘

## Key Components

### Infrastructure Layer
- **Terraform**: Infrastructure as Code provisioning
- **Azure Resources**: AKS, ACR, VNet, Resource Group

### Automation Layer  
- **GitHub Actions**: CI/CD pipeline automation
- **Workflows**: Terraform apply, Docker build, Kubernetes deployment

### Containerization Layer
- **Docker**: Containerization of services
- **Multi-service**: Frontend, Backend, Database containers

### Orchestration Layer
- **Kubernetes (AKS)**: Container orchestration
- **Services**: Deployment, Service, Ingress manifests
