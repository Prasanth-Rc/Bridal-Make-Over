pipeline {
    agent any

    environment {
        CI = 'false'

        // CHANGE THIS TO YOUR DOCKER HUB USERNAME
        DOCKER_IMAGE = 'rcprasanth/kd-bridal-makeover'

        // Jenkins local container name
        DOCKER_CONTAINER = 'kd-bridal-makeover-container'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm ci'
            }
        }

        stage('Build React Application') {
            steps {
                echo 'Building React application...'
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
                echo 'Building Docker image...'

                bat """
                    docker build --platform linux/amd64 ^
                    -t ${DOCKER_IMAGE}:${APP_VERSION} ^
                    -t ${DOCKER_IMAGE}:latest .
                """
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Stopping existing container if it exists...'

                bat """
                    docker stop ${DOCKER_CONTAINER} 2>nul || exit /b 0
                    docker rm ${DOCKER_CONTAINER} 2>nul || exit /b 0
                """
            }
        }

        stage('Create Docker Container') {
            steps {
                echo 'Creating Docker container...'

                bat """
                    docker run -d ^
                    --name ${DOCKER_CONTAINER} ^
                    -p 3000:80 ^
                    ${DOCKER_IMAGE}:${APP_VERSION}
                """
            }
        }

        stage('Check Docker Container') {
            steps {
                echo 'Checking Docker container...'

                bat """
                    docker ps
                    docker logs ${DOCKER_CONTAINER}
                """
            }
        }
 
        stage('Login to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {

                    bat """
                        echo %DOCKER_PASSWORD% | docker login ^
                        -u %DOCKER_USERNAME% ^
                        --password-stdin
                    """
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                echo 'Pushing Docker image to Docker Hub...'

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {

                    bat """
                        docker push ${DOCKER_IMAGE}:${APP_VERSION}
                        docker push ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }

        stage('Logout Docker Hub') {
            steps {
                bat 'docker logout'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Triggering Render deployment...'

                withCredentials([
                    string(
                        credentialsId: 'render-deploy-hook',
                        variable: 'RENDER_HOOK'
                    )
                ]) {

                    bat """
                        curl -X POST "%RENDER_HOOK%"
                    """
                }
            }
        }
    }

    post {

        success {
            echo '=============================================='
            echo 'BUILD SUCCESSFUL'
            echo '=============================================='
            echo "Application Version: ${APP_VERSION}"
            echo "Docker Image: ${DOCKER_IMAGE}:${APP_VERSION}"
            echo "Docker Image: ${DOCKER_IMAGE}:latest"
            echo 'Docker container created successfully.'
            echo 'Docker image pushed to Docker Hub.'
            echo 'Render deployment triggered successfully.'
            echo '=============================================='
        }

        failure {
            echo '=============================================='
            echo 'BUILD FAILED'
            echo '=============================================='
            echo 'Please check the Jenkins console output.'
            echo '=============================================='
        }
    }
}
