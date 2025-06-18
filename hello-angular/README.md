Use 
ng serve
to run the app locally

Update src/enviroments/enviroment.prod.ts with the production api url
and,
ng build --configuration=production
to build a prod version

Build the docker image with,
docker build -t aldrinm/hello-angular:0.0.0 .

Upload to docker hub with,
docker push aldrinm/hello-angular:0.0.0

Available as a docker container at aldrinm/hello-angular
