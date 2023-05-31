pipeline{
    stage('Front-end') {
            agent {
                docker { image 'node:17-alpine'}
            }
            steps {
                sh 'node --version'
            }
        }
}