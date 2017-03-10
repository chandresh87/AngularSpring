FROM tomcat:8.0.20-jre8
COPY ${env.PATH}/var/lib/jenkins/workspace/SpringAngular/target/AngularSpring.war /usr/local/tomcat/webapps/
