FROM tomcat:8.0.20-jre8
COPY target/AngularSpring.war /usr/local/tomcat/webapps/
COPY target/AngularSpring/assets/ /usr/local/tomcat/webapps/assets/
RUN ls -la /usr/local/tomcat/webapps/*
