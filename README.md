[![CI/CD Pipeline](https://github.com/omardaoud1/devops-intern/actions/workflows/ci-multi.yml/badge.svg)](https://github.com/omardaoud1/devops-intern/actions/workflows/ci-multi.yml)

# DevOps Internship Project - Complete CI/CD on Azure

## 📋 Project Overview
This project implements a complete DevOps pipeline for a containerized multi-service application on Microsoft Azure, featuring Infrastructure as Code (Terraform), CI/CD (GitHub Actions), Kubernetes (AKS), and DevSecOps practices.

## 🚀 Quick Links
- [**System Architecture**](docs/architecture.md)
- [**CI/CD Pipeline**](docs/cicd-github-actions.md)
- [**Infrastructure as Code**](docs/infrastructure-as-code.md)
- [**Deployment Guide**](docs/kubernetes.md)
- [**DevSecOps Security**](docs/devsecops.md)

devops-intern/
├── backend/                # Node.js backend application
├── frontend/               # React frontend application
├── k8s/                    # Kubernetes manifests (deployments, services, ingress)
├── terraform/              # Infrastructure as Code (Terraform configurations)
├── docs/                   # Project documentation and architecture diagrams
├── .github/workflows/      # GitHub Actions CI/CD pipelines
│ ├── terraform.yml         # Infrastructure provisioning workflow
│ └── ci-multi.yml          # Application build/deploy workflow
├── docker-compose.yml      # Local development with Docker Compose
└── README.md               # Project overview and documentation

## ⚙️ Prerequisites
- Azure Account
- GitHub Account
- Docker
- Kubernetes CLI (kubectl)
- Terraform

## 🏃Quick Start

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/omardaoud1/devops-intern.git
    cd devops-intern
    ```

2.  **Set up Azure credentials:** Add `AZURE_CREDENTIALS` to GitHub Secrets.

3.  **Provision infrastructure:** The Terraform workflow will run automatically.

4.  **Deploy application:** Push code to trigger the CI/CD pipeline.

## 📊 Project Status

✅ **Completed Features:**
- Infrastructure as Code with Terraform
- CI/CD Pipeline with GitHub Actions  
- Kubernetes Deployment on AKS
- Containerization with Docker
- Security Scanning with Trivy

🔧 **Technology Stack:**
- **Cloud:** Microsoft Azure
- **Infrastructure:** Terraform
- **CI/CD:** GitHub Actions
- **Containers:** Docker, Azure Container Registry
- **Orchestration:** Kubernetes (AKS)
- **Security:** Trivy vulnerability scanning

Documentation

For detailed explanations, configurations, please refer to the Markdown files in the /docs directory.
This includes documentation on kubernetes, terraform, ci/cd pipeline, security part , and other  components to help you understand the project thoroughly.

Author

Omar Daoud


