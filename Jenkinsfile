pipeline {
   agent any
   stages {
      stage('setup') {
         steps {
            browserstack(credentialsId: 'f98d4bf4-73ef-4f37-b3df-a91786091f55') {
               echo "hello"
               sh 'npm run https://github.com/jamihuq/node-js-selenium-browserstack/tree/main/tests/parallel'
            }
            browserStackReportPublisher 'automate'
         }
      }
    }
  }