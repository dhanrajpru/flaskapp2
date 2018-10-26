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
        sh "docker build -t flaskapp ."
    }  
  }   

  stage ("Docker deploy"){
    steps {
       sh "docker run -d -p 5000:5000 flaskapp"
   }   
  }

   stage("launch inf0"){
     steps {
          echo "http://${ip}:5000"
        }
      }
  }
}  

