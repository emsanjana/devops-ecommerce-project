pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        BACKEND_IMAGE = "paisanjana/ecommerce-backend"
        FRONTEND_IMAGE = "paisanjana/ecommerce-frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/emsanjana/devops-ecommerce-project.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh "docker build -t $BACKEND_IMAGE:latest ./backend"
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh "docker build -t $FRONTEND_IMAGE:latest ./frontend"
            }
        }

        stage('Login to DockerHub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Push Backend Image') {
            steps {
                sh "docker push $BACKEND_IMAGE:latest"
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh "docker push $FRONTEND_IMAGE:latest"
            }
        }
    }
}
