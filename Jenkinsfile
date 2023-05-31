pipeline{
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
         stage('Build Docker image') {
     steps {
        script {
          docker.build("18-alpine").run('-p 8009:3000').build()
        }
      }
    }
    }

}