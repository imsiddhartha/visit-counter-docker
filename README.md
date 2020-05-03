<h1> Website visit tracker using Docker </h1>

<h3>Licensing</h3>
This is licensed under the Apache 2.0 license - see https://www.apache.org/licenses/LICENSE-2.0

<h3>Getting started</h3>
Built a simple web application which keeps tracks of counts of how many times your website is visisted. This project is build using node.js inside a container and redis to save visits count in an in-memory database.

<h3>How to run this code.</h3>
This project assumes that you have alraeady installed a stableversion of docker on your machine.


* cd visits

Builds docker image based on the configuration provided in Docker file.

* RUN docker-compose up

docker-compse will fetch the configuration of your application from docker-compose.yml file, builds it and start running the application accordingly.


You can use browser or postman to do a GET request.
* curl http://localhost:<port_number>



** You shall see a message "Number of visits is <number>"
