ECHO OFF
set tomcatHome="C:\TachArch\apache-tomcat-9.0.0.M17-windows-x64\apache-tomcat-9.0.0.M17"
ECHO Building Angular App
set AngularPath=%cd%/angular2
RMDIR /S /Q %cd%/angular2
MKDIR %cd%/angular2
chdir %~dp0/angular2
call git clone ssh://cmishra@10.137.173.62:29418/ITMPBrowser
call NPM install
call ng build --prod --aot=false -bh /AngularSpring  -d ./AngularSpring
ECHO Building War File
cd..
call mvn clean package
set currentpath=%cd%
Xcopy %currentpath%\target\AngularSpring.war %tomcatHome%\webapps
robocopy %cd%/target/AngularSpring/assets %tomcatHome%\webapps/assets  /s /e
call %tomcatHome%/bin/startup.bat
PAUSE
