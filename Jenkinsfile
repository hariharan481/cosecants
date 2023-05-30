pipeline{
    agent any
    tools{nodejs "node"}
    stages{
        stage("Build"){
            steps{
                git branch: 'main', url: 'https://github.com/hariharan481/cosecants.git'
               bat 'npm install'  
            }
        }
    }
}