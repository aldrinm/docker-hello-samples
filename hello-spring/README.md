Just a demo Spring boot app. 

Available as a docker container at aldrinm/hello-spring

Build the docker image with,
docker build -t aldrinm/hello-spring:0.0.1 .

Upload to docker hub with,
docker push aldrinm/hello-spring:0.0.1

Set environment variable ALLOWED_CORS_ORIGINS to the frontend app domain. Default is http://localhost:4200 