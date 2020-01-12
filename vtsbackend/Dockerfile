FROM openjdk:latest
MAINTAINER sidvijay2004@gmail.com
WORKDIR /opt/springbootapp/
ADD target/vtsbackend-0.0.1-SNAPSHOT.jar  /opt/springbootapp/
RUN chmod +x vtsbackend-0.0.1-SNAPSHOT.jar
CMD ["java", "-Dspring.profiles.active=prod", "-jar", "vtsbackend-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080