pipeline {
    agent any

    environment {
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

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE:latest ./backend'
                sh 'docker build -t $FRONTEND_IMAGE:latest ./frontend'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push $BACKEND_IMAGE:latest
                    docker push $FRONTEND_IMAGE:latest
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/
                kubectl rollout restart deployment backend
                kubectl rollout restart deployment frontend
                kubectl get pods
                '''
            }
        }
    }
}
