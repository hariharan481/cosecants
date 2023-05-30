pipeline{

    
    tools{nodejs "node"}
    stages{
        stage("Build"){
            steps{
              
               bat 'node:17-alpine'
            }
        }
        agent { dockerfile true }
    }
}