pipeline {
 agent { label "build" }
  environment {
        def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
 }
  stages {
    stage("checkout"){
      steps {
         checkout scm
      }
    }

  stage("build docker images"){
    steps {
        sh "sudo docker build -t flaskapp/comorin:ci_latest ."
    }  
  }   
  
  stage ("Docker deploy"){
    steps {
       sh "sudo docker stop flask" 
       sh "sudo docker rm flask" 
       sh "sudo docker run -d -p 5000:5000 -e $FLASK_DEMO_URL --name flask flaskapp/comorin:ci_latest"
   }   
  }

   stage("launch info"){
     steps {
          echo "http://${ip}"
        }
      }
   stage("Robot testing"){
     steps {
       dir ("./robottesting"){
           sh "sudo docker stop robot"
           sh "sudo docker rm robot"
           sh "sudo docker build -t robot ."
           sh "docker run -d --name robot robot"
           }
        }
    }

   stage("Protractor testing"){
        steps {
          dir ("./test") {
              sh "sudo docker-compose up -d"
              sh "sudo docker build -t protractor ."
              sh "sudo docker rm -f protractor"
              sh "sudo rm -rf ./test/conf/allure-results/*.xml"
              sh "sudo docker run -v /home/ubuntu/workspace/sandbox/DevOpsDemo/test/test/conf/allure-results:/test/conf/allure-results -e FLASK_DEMO_URL=$FLASK_DEMO_URL --name protractor protractor"
          }
        }
      }
   stage("Tag and push") {
            steps {
                withDockerRegistry(credentialsId: '2f25b61e-5aa0-4b38-891c-5653c22035d6',url:'') {
                    sh "sudo docker tag flaskapp/comorin:ci_latest"
                    sh "sudo docker push flaskapp/comorin:ci_latest"
                    

                }
            }
        }     
    }
 post {
   always {
     dir ( "./test/test/conf/" ) { 
        allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
     }
   }  
  }
}
  
  

