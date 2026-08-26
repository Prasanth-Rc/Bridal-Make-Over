pipeline {
    agent any

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
    }

    post {
        success {
            echo 'React application build completed successfully.'
        }

        failure {
            echo 'React application build failed.'
        }
    }
}
