pipeline {
 agent { label "suku-test" }
  stages {
    stage("checkout"){
      steps {
         checkout scm
      }
    }

  stage("build docker images"){
    steps {
        sh "docker build -t flaskapp ."
    }  
  }   
  
  stage ("Docker deploy"){
    steps {
       sh "docker stop flask" 
       sh "docker run -d -p 5000:5000 -e $FLASK_DEMO_URL --name flask flaskapp"
   }   
  }

   stage("launch info"){
     steps {
          echo "http://${ip}:5000"
        }
      }
  }
}  

