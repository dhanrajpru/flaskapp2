pipeline {
 agent { label "build" }
  stages {
    stage("checkout"){
      steps {
         checkout scm
      }
    }

  stage("build docker images"){
    steps {
        sh "sudo docker build -t flaskapp ."
    }  
  }   
  
  stage ("Docker deploy"){
    steps {
       sh "sudo docker stop flask" 
       sh "sudo docker rm flask" 
       sh "sudo docker run -d -p 5000:5000 -e $FLASK_DEMO_URL --name flask flaskapp"
   }   
  }

   stage("launch info"){
     steps {
          echo "http://${ip}"
        }
      }
   stage("Protractor testing"){
        steps {
          dir ("./test") {
              sh "sudo docker-compose up -d"
              sh "sudo docker build -t protractor ."
              sh "sudo docker rm -f protractor"
              sh "sudo rm -rf ./test/conf/allure-results/*.xml"
              sh "sudo docker run -v /home/ubuntu/workspace/sandbox/DevOpsDemo/test/test/conf/allure-results:/test/conf/allure-results -e ETH_APP_URL=$FLASK_DEMO_URL --name protractor protractor"
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
  
  

