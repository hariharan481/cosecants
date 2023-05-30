pipeline{
    agent any
    tools{nodejs "node"}
    stages{
        stage("Build"){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/hariharan481/cosecants.git']])
                bat 'npm install'
            }
        }
    }
}