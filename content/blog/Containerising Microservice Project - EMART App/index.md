---
title: Containerising Microservice Project - Emart App
date: '2023-01-14T20:12:37.00Z'
description: 'Packaging a microservice app into a docker container for easy deployment'
---


<a name="top"></a>

## Content
- <a href="#App Description">App Description</a>
- <a href="#Implementation">Implementation</a>
- <a href="#Build and Run on EC2 instance">Build and Run on EC2 instance</a>

Hello and Happy New Year!! I know we are 2 weeks into the year but if I'm being honest, I still have my Christmas decorations up so I'm still in the new year mood. In this blog, we are going to cover containers. Yup! I know what you are thinking. The title is not different from what we're going to talk about. The blog will cover how to package a microservice app into a docker container for easy deployment. Now what is a microservice? I'm sure you might have an idea of what it is but if you don't, here is how I summarize what it is. Microservice is an architectural style that divides an application into a number of services that can be deployed separately, are loosely coupled, highly maintainable and testable. Large, sophisticated applications may be delivered quickly, often, and reliably thanks to the microservice design. It also enables an organization to evolve its technology stack.

![Screenshot from 2023-01-27 14-44-01](https://user-images.githubusercontent.com/37503046/215114064-db891def-4a82-4448-807a-17eac31d5657.png)

Look at the image above, now imaging if that was an application. The application is divided into a number of smaller independent units rather than being one large unified unit. Every application service is handled separately by these units. As a result, each service performs specialised tasks, has its own logic and database, and communicates with other services either by using message brokers or APIs. Now isn't that amazing? Of course it is!! Adopting microservices often goes hand in hand with DevOps, since they are the basis for continuous delivery practices that allow teams to adapt quickly to user requirements. As a DevOps Engineer, you will undoubtedly deal with a microservice architecture because it is here to stay. As such, you should be able to package and deploy one without difficulty. One way you can do that is to use Docker.

Docker is an open source virtualization technology that serves as a software container platform. These containers allow you to enclose an application, complete with its own filesystem, in a single, replicable package. Docker containers, which originated from open source collaboration, helped to revolutionise the world of software development. By encasing software in shells of code known as containers, which contain all of the resources the software requires to run on a server - tools, runtime, system libraries, and more - the software can perform consistently across multiple hosting platforms such as AWS, Google Cloud, Microsoft Azure, and Apache. 

Now that we have an understanding of what the project architecture might be like... Let's dive into it. You will need to install **docker**, **VSCode**, and also have an **AWS** account. We will containerise and deploy the app on an **EC2** instance.

<h2 id="App Description">App Description</h2>

The app is an ecommerce application with multiple microservices. There are four services in total in the microservice app. To begin, **NGINX** serves as the **API gateway**, which is the front end from which all requests are received. This API gateway handles all communications between the other services. It listens for requests and routes them based on the headers in the URL. So, if a request is received on a **/**, that is, if you are simply accessing the URL, it is routed to the client microservice, which is written in **Angular**. This loads the website's frontend pages. The **Emart api**, written in **NodeJS**, is contacted for backend data, through the **/api**. The **NodeJs** service requires a database, and we use **MongoDB**, a NoSQL database, in this case. There is also another integration of another service, the **Books api**, which is written in **Java**. It makes use of the **MySQL** database, which is accessed via **/webapi**. The architecture can be seen below and the link to the project can be found <a href="https://github.com/Ben74x/emart-app">here.</a>


![Screenshot from 2023-01-27 16-18-16](https://user-images.githubusercontent.com/37503046/215137041-b213faae-fb20-45d0-b3e6-27a1275d804a.png)



<h2 id="Implementation">Implementation</h2>

Okay so now we have a clear picture of the app and it's architecture. I will split the implementation into two parts. The first part will cover a summary of the dockerfiles and how the app is containerised. The second part will cover the deployment on EC2 instance. I decided to split it because the app is quiet big in size and the free tier instances are not going to get the job done quickly. You need fast and better instances which might cost money but if you can implement it within an hour, you should be safe from charges.

Let's create a directory and clone the project on our machine from Github. 

```js
mkdir microsvcapp
cd microsvcvapp/
git clone https://github.com/Ben74x/emart-app.git
```
<br>
After cloning, confirm the app is in the microsvcapp directory by listing the files in the directory. Once you see it, open and run the last command to open the code directory in VScode.

```js
ls
cd emartapp/
code .
```

Once the code directory is opened in VSCode, it should look like this picture below.
![Screenshot from 2023-01-28 20-51-50](https://user-images.githubusercontent.com/37503046/215290638-3daa778d-0f20-4e16-9985-eca0990c79ac.png)

In the project, there are the client, javaapi, nginx and nodeapi directories. Let's take a look at them one by one. First we'll look into the Dockerfile for client.
![Screenshot from 2023-01-28 21-20-40](https://user-images.githubusercontent.com/37503046/215291686-e161c1ee-6526-4289-b582-bc77216799c8.png)


This is a multi-stage docker file. In the first stage, we pull the node image with the tag 14 from the Docker Hub. The tag specifies the desired version of the node, which in this case is 14. The Angular application is built under node image with the name web-build. This is done by setting the working directory as /usr/src/app. Then we copy all the source code in the emart app directory into ./client under the image. This means the code will be in the directory /usr/src/app/client. Finally, we go into the directory and run npm commands to build the application. Don't worry if you're unfamiliar with Node and Angular. You are not required to learn that. Keep in mind, however, that whenever you work on a project, you must obtain information from the developers about the build process or the build commands to use in order to obtain the artifact. It is critical to obtain that information because the build steps are contained in the docker file. You should be able to create that application. The Angular application is hosted on nginx in the second stage. Because it is a web application, we use nginx. So we get the most recent version of a nginx image. The artifact is then copied from web-build. We copy the artifact's directory into the nginx image's /usr/share/nginx/html directory. One might wonder how you'll know where to look for the artifact. All of that information is obtained from the developers. There's also the issue of where to put the artifact in the nginx image. So, according to the official documentation of the nginx image on Docker Hub, you must place your html file in the /usr/share/nginx/html directory. In addition, we copy our own nginx configuration file to /etc/nginx/conf.d/default.conf. Let's take a look at the customised nginx configuration file.
<br/><br/>
![Screenshot from 2023-01-28 22-29-13](https://user-images.githubusercontent.com/37503046/215294054-e983f195-e805-466f-bb14-231a06942924.png)

So the configuration file simply says if someone accesses the nginx container on / path, we show the content from the root and index directory. The index.html and index.htm files are loaded in the browser. So in the artifact we have the index.html file which is the nginx container presented to the user.


Okay now let's jump to the NodeJs side. The DockerFile can be seen below.
![Screenshot from 2023-02-01 11-41-51](https://user-images.githubusercontent.com/37503046/216033325-b6d7a00c-ff3f-45f9-97b0-7ae56fae6efc.png)

This is also a multi-stage DockerFile and it is built again on Node. So we have this first stage where the artifact is built and the second stage where the artifact is used. Similar to the previous process work directory, we set up a new one and copy the source code from the current directory. All the source code will be copied into Node API directory instruction. We then go into that directory and run NPM install which is the build command. In the second stage, it runs on Node. Again, we set the work directory and we copy the artifact from nopeapi-build which is from the first image. We also run the ls command to list the files from the directory which you can see when you're building the dockerfile and also expose it on port 5000. Lastly we run the CMD command which goes into /usr/src/app/ directory and start the Node app. Okay so that's the second microservice dockerfile. Let's move to the next one. 


The DockerFile of the javaapi side can be seen below.
![Screenshot from 2023-02-01 12-20-01](https://user-images.githubusercontent.com/37503046/216042063-7de94c6d-807e-4eba-a022-d959eaa6d4a6.png)


Again, this is also multi-stage. In the first stage, we take an open JDK image because we need Maven. We set the work directory and run apt update && apt install maven -y, which installs maven. Then, we copy the source code to /usr/src/app directory and run the command mvn install, which build the artifact. In the second stage, we pull openjdk8 from docker hub and copy the artifact from the first image into the current directory with the name ./book-work-0.0.1.jar. Then we expose it on port 9000 and run the command to build the Java application. The last bit is nginx as the api gateway. We are not going to build a separate container but rather use the official nginx image. We will attach the default.conf to the nginx official image. We don't need to build a separate nginx image because all we need is this configuration for the nginx service to load. 


Finally, we use Docker Compose to build all the docker files together. The Docker Compose file can be seen below.

```js
version: "3.8"
services:
    client:
        build:
            context: ./client
        ports:
            - "4200:4200"
        container_name: client
        depends_on:
            [api, webapi]

    api:
        build:
            context: ./nodeapi
        ports:
            - "5000:5000"
        container_name: api
        depends_on:
            - nginx
        depends_on:
            [emongo]

    webapi:
        build:
            context: ./javaapi
        ports:
            - "9000:9000"
        restart: always
        container_name: webapi
        depends_on:
            [emartdb]

    nginx:
        restart: always
        image: nginx:latest
        container_name: nginx
        volumes:
            - "./nginx/default.conf:/etc/nginx/conf.d/default.conf"
        ports:
            - "80:80"
        command: ['nginx-debug', '-g', 'daemon off;']
        depends_on:
            [client]

    emongo:
       image: mongo:4
       container_name: emongo
       environment:
         - MONGO_INITDB_DATABASE=epoc
       ports:
         - "27017:27017"
    emartdb:
      image: mysql:5.7
      container_name: emartdb
      ports:
         - "3306:3306"
      environment:
        - MYSQL_ROOT_PASSWORD=emartdbpass     
        - MYSQL_DATABASE=books
```


<br/><br/>

<h2 id="Build and Run on EC2 instance">Build and Run on EC2 instance</h2>
We will take this docker-compose file from the project directory and use it to build and run the microservice app. We are going to build and run it on an EC2 instance so make sure you have an AWS account. Also, make sure you finish this part within an hour else it might cost you a few pennies on your account. Make sure to go through the process and understand every part before implementing it.

1. Sign into your AWS console and search for EC2. Click it to go to the EC2 dashboard

![Screenshot from 2023-02-01 16-31-43](https://user-images.githubusercontent.com/37503046/216104205-f39432bb-e3f7-429c-a25f-1deed91e7a88.png)
<br/>
2. Click on launch instance

![Screenshot from 2023-02-01 16-36-06](https://user-images.githubusercontent.com/37503046/216105066-35aeac6e-16ff-497e-9aeb-8d303f021d0f.png)
<br/>
3. Name the instance *microsvcapp* and select the *ubuntu* AMI.

![Screenshot from 2023-02-01 16-37-31](https://user-images.githubusercontent.com/37503046/216105864-b7f94e1f-3f09-4f2b-9a2b-1269c8919628.png)

