pipeline {
    agent any

    environment {
        CLIENT_CONTAINER = 'my-client'
        PORT = '80'
    }

    stages {
        stage('Clean up old containers') {
            steps {
                script {
                    // Stop and remove existing client container if it exists
                    sh "docker stop ${CLIENT_CONTAINER} || true"
                    sh "docker rm ${CLIENT_CONTAINER} || true"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the client application
                    sh "docker build -t my-client ."

                    // Run the client container
                    sh "docker run -d --name ${CLIENT_CONTAINER} -p ${PORT}:${PORT} my-client"
                }
            }
        }
    }
}
