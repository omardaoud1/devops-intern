# DevSecOps Implementation

## Overview
Security is integrated throughout the CI/CD pipeline using Trivy for container vulnerability scanning and Snyk for dependency analysis.

## Security Tools
- **Trivy:** Container security scanning (OS packages + dependencies)
- **Snyk:** Dependency vulnerability scanning for Node.js

## Implementation
- Pre-deployment security checks in GitHub Actions
- Critical vulnerabilities fail the build automatically
- Scanning integrated into both backend and frontend workflows

## Key Features
- Shift-left security approach
- Automated scanning without manual intervention
- Focus on critical severity vulnerabilities
- Seamless CI/CD pipeline integration

*Detailed implementation analysis and results are covered in the final project report.*
