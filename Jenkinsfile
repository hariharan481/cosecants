pipeline{
    agent{
        docker{
            image 'node:17-alpine'
            args '-p 3000:3000'
        }
    }
    stages('Build'){
        steps{

              git branch: 'main', url: 'https://github.com/hariharan481/cosecants.git'
            bat 'npm install'
            
        }
    }
}