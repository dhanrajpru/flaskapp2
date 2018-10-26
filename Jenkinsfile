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
       sh "sudo docker run -d -p 5000:5000 -e $FLASK_DEMO_URL --name flask flaskapp"
   }   
  }

   stage("launch info"){
     steps {
          echo "http://${ip}"
        }
      }
  }
}  

