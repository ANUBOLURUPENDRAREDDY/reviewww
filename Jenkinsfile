pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontendreactapp'
        BACKEND_DIR = 'SpringBootSDPProject/SpringBootSDPProject'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                // This step is automatic in pipeline
            }
        }

        stage('Build React App') {
            steps {
                dir("${FRONTEND_DIR}") {
                    echo 'Installing and building React app...'
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Spring Boot App') {
            steps {
                dir("${BACKEND_DIR}") {
                    echo 'Building Spring Boot app...'
                    bat 'mvnw clean package -DskipTests || mvn clean package -DskipTests'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving artifacts...'
                archiveArtifacts artifacts: "${BACKEND_DIR}/target/*.jar", fingerprint: true
                archiveArtifacts artifacts: "${FRONTEND_DIR}/build/**", fingerprint: true
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo 'Add deployment steps here (e.g., SCP, Docker, etc.)'
            }
        }
    }
}
