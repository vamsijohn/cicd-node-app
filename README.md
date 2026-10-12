# 🚀 Enterprise-Grade Node.js CI/CD Pipeline & Containerization Workflow

An industry-standard DevOps demonstration project showcasing automated containerization, infrastructure orchestration, and local CI/CD simulation workflows. Built to maintain operational readiness, environment consistency, and rigorous deployment standards.

---

## 🛠️ Technical Skills & Competencies Demonstrated

* **Containerization & Orchestration:** Docker, Docker Compose, Multi-stage Builds, Container Lifecycle Management.
* **CI/CD Pipeline Architecture:** Automated Webhooks, Build Triggers, Artifact Packaging, and Release Automation.
* **Cloud & Infrastructure Engineering:** Linux (Ubuntu/Alpine), Shell Scripting, Port Mapping (`Host:Container`), Network Configuration.
* **Version Control & Collaboration:** Git branching strategies, remote repository synchronization, professional documentation (`README.md`).
* **DevOps Practices:** Infrastructure as Code principles, environment parity, error handling, and container cleanup routines.

---

## 🏗️ Project Architecture & Workflow

```text
+----------------------+       Git Push        +-----------------------+

|                      |  ------------------>  |                       |
|   Developer / Local  |                       |   GitHub Repository   |
|      Workspace       |                       |   (cicd-node-app)     |
+----------------------+                       +-----------------------+
                                                           |
                                                   Automated Build &
                                                   Container Orchestration
                                                           |
                                                           v
+------------------------------------------------------------------+

|                        Docker Runtime Environment                |
|                                                                  |
|   +------------------+                    +------------------+   |
|   |   Host Port      |  -p 3000:80        | Node.js Container|   |
|   |     (3000)       | -----------------> |  Internal (80)   |   |
|   +------------------+                    +------------------+   |
+------------------------------------------------------------------+
                                     ^
                                     |
                                HTTP Request
                                     |
                        +--------------------------+

                        |      End User / Browser  |
                        |   (http://localhost:3000)|
                        +--------------------------+
```

## 📋 Technology Stack

* **Application Runtime:** Node.js (Alpine Linux lightweight image)
* **Container Engine:** Docker & Docker Compose
* **Version Control:** Git & GitHub
* **Operating System Environment:** Cross-platform (Linux, WSL2, macOS, Windows PowerShell)

---

## ⚙️ Step-by-Step Local Deployment & Execution Guide

### 1. Clone the Repository
```bash
git clone https://github.com/vamsijohn/cicd-node-app.git
cd cicd-node-app
```

### 2. Build the Docker Image
Execute the following command to build the immutable container image:
```bash
docker build -t node-cicd-app .
```

### 3. Run with Port Mapping & Automated Cleanup
Run the container instance, handling stale containers automatically and binding host port 3000 to internal container port 80:
```bash
docker stop node-app-container 2>/dev/null || true
docker rm node-app-container 2>/dev/null || true

docker run -d -p 3000:80 --name node-app-container node-cicd-app
```

### 4. Verification
Verify the running container status:
```bash
docker ps
```
Access the application via web browser:
👉 **http://localhost:3000**

---

## 📂 Project Structure

```plaintext
cicd-node-app/
├── app.js               # Node.js production-ready HTTP server
├── Dockerfile           # Multi-layer containerization blueprint
├── docker-compose.yml   # Orchestration configuration and port binding
└── README.md            # Comprehensive technical documentation
```

---

## 🔮 Future Scalability & Enhancements

* Implementing full Jenkins declarative pipelines with automated stage error handling.
* Integrating GitHub Actions for automated linting, unit testing, and image scanning on every pull request.
* Deploying containerized workloads onto Kubernetes clusters using Minikube for high availability.
