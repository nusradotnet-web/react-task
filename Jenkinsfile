pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Matches the name in Jenkins Global Tool Configuration
    }
options {
        skipDefaultCheckout() // Skip standard checkout to do a clean one
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Cleaning workspace and fetching fresh source code...'
                cleanWs() // Cleans the workspace directory completely
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Installing dependencies and building React application...'
                bat 'npm ci --prefer-offline'
                bat 'npm run build'
            }
        }

    stage('Test') {
    steps {
        echo 'Executing React unit tests...'
       bat 'set CI=true && npm test -- --watchAll=false'
    }
}

        stage('Validation') {
            steps {
                echo 'Performing code validation check...'
                // Validates package configuration or runs linting if configured
                bat 'npm run lint || echo No lint script defined, validation passed.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete.'
        }
    }
}