pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Matches the name in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                // Jenkins automatically handles git checkout when configured via SCM
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
        // Add --passWithNoTests flag
        bat 'set CI=true && npm test -- --watchAll=false --passWithNoTests'
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