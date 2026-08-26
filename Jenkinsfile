pipeline {
    agent any

    environment {
        CI = 'false'
        DOCKER_IMAGE = 'kd-bridal-makeover'
        DOCKER_CONTAINER = 'kd-bridal-makeover-container'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            } 
        }
 
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build React Application') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Set Version') {
            steps {
                script {
                    env.APP_VERSION = "1.0.${env.BUILD_NUMBER}"
                    echo "Application Version: ${env.APP_VERSION}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${DOCKER_IMAGE}:${APP_VERSION} ."
            }
        }

        stage('Stop Old Container') {
            steps {
                bat """
                    docker stop ${DOCKER_CONTAINER} 2>nul || exit /b 0
                    docker rm ${DOCKER_CONTAINER} 2>nul || exit /b 0
                """
            }
        }

        stage('Run Docker Container') {
            steps {
                bat """
                    docker run -d ^
                    --name ${DOCKER_CONTAINER} ^
                    -p 3000:80 ^
                    ${DOCKER_IMAGE}:${APP_VERSION}
                """
            }
        }
    }

    post {
        success {
            echo "React application ${APP_VERSION} deployed successfully."
        }

        failure {
            echo "React application build or Docker deployment failed."
        }
    }
}
