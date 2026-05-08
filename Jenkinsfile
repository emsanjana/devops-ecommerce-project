pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/emsanjana/devops-ecommerce-project.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t ecommerce-backend ./backend'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t ecommerce-frontend ./frontend'
            }
        }

        stage('List Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}
