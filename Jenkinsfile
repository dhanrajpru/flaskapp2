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
        sh "docker build -t flaskapp/comorin:ci_latest ."
    }  
  }   
  
  stage ("Docker deploy"){
    steps {
       sh "docker stop flask" 
       sh "docker rm flask" 
       sh "docker run -d -p 5000:5000 -e $FLASK_DEMO_URL --name flask flaskapp/comorin:ci_latest"
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
           sh "docker stop robot"
           sh "docker rm robot"
           sh "docker build -t robot ."
           sh "docker run -d --name robot robot"
           }
        }
    }

   stage("Protractor testing"){
        steps {
          dir ("./test") {
              sh "docker-compose up -d"
              sh "docker build -t protractor ."
              sh "docker rm -f protractor"
              sh "rm -rf ./test/conf/allure-results/*.xml"
              sh "docker run -v /home/ubuntu/workspace/sandbox/DevOpsDemo/test/test/conf/allure-results:/test/conf/allure-results -e FLASK_DEMO_URL=$FLASK_DEMO_URL --name protractor protractor"
          }
        }
      }
   stage("Tag and push") {
            steps {
                withDockerRegistry(credentialsId: '2f25b61e-5aa0-4b38-891c-5653c22035d6',url:'') {
                    sh "docker tag flaskapp/comorin:ci_latest comorincs/flaskapp/comorin:ci_latest"
                    sh "docker push comorincs/flaskapp/comorin:ci_latest"
                    

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
  
  

