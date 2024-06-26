---
title: Containerised Microservice Project - Emart App
date: '2023-01-14T20:12:37.00Z'
description: 'Packaging a microservice app into a docker container for easy deployment'
---


<a name="top"></a>

## Content
- <a href="#App Description">App Description</a>
- <a href="#Implementation">Implementation</a>
- <a href="#Build and run on EC2 instance">Build and run on EC2 instance</a>
- <a href="#Cleanup">Cleanup</a>

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

<h2 id="Build and run on EC2 instance">Build and run on EC2 instance</h2>
We will take this docker-compose file from the project directory and use it to build and run the microservice app. We are going to build and run it on an EC2 instance so make sure you have an AWS account. Also, make sure you finish this part within an hour else it might cost you a few pennies on your account. Make sure to go through the process and understand every part before implementing it.
<br/><br/><br/>

1. Sign into your AWS console and search for EC2. Click it to go to the EC2 dashboard

![Screenshot from 2023-02-01 16-31-43](https://user-images.githubusercontent.com/37503046/216104205-f39432bb-e3f7-429c-a25f-1deed91e7a88.png)
<br/><br/>
2. Click on launch instance

![Screenshot from 2023-02-01 16-36-06](https://user-images.githubusercontent.com/37503046/216105066-35aeac6e-16ff-497e-9aeb-8d303f021d0f.png)
<br/><br/>
3. Name the instance *microsvcapp* and select the *ubuntu* AMI.

![Screenshot from 2023-02-01 16-37-31](https://user-images.githubusercontent.com/37503046/216105864-b7f94e1f-3f09-4f2b-9a2b-1269c8919628.png)
<br/><br/>
4. Choose *t3.medium* as the instance type and create a new key pair with the following details: 

Key pair name: *microsvc-key*

Key pair type: *RSA*

Private key file format: *.pem*
![Screenshot from 2023-02-01 16-52-51](https://user-images.githubusercontent.com/37503046/216108977-b10ceb05-ae84-4ecb-a9a4-de1d9c8b4bcf.png)
<br/><br/>
5. Click Create security group and select *Allow SSH traffic from my ip*. Also select *Allow http traffic from the internet* so that we can access our nginx container which is the API gateway.
![Screenshot from 2023-02-01 17-11-14](https://user-images.githubusercontent.com/37503046/216114050-a36f75ef-e909-4867-b61a-c0ec9c999d0c.png)
<br/><br/>
6. We will need a minimum of 15GB for our app so to be on the safe side, provision 25 GiB as the storage volume. 
![Screenshot from 2023-02-01 17-15-41](https://user-images.githubusercontent.com/37503046/216115007-4b55a283-1c3b-4067-a6a5-6dfdd3a9a076.png)
<br/><br/>
7. Lastly, we will need docker engine on the instance and we need to add Ubuntu user in the docker group. We will write a script and put it in the *User data* section in the advance details. The script can be found below.
```js
    #!/bin/bash

    # Install docker on Ubuntu
    sudo apt-get update
        sudo apt-get install \
            ca-certificates \
            curl \
            gnupg \
            lsb-release -y
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
        echo \
            "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
            $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Install docker-compose
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io -y
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

    # Add ubuntu user into docker group
        sudo usermod -a -G docker ubuntu
```
<br/><br/>
8. Click on launch instance.
![Screenshot from 2023-02-01 17-28-04](https://user-images.githubusercontent.com/37503046/216117915-817c2553-ce10-483c-811f-f7045059a006.png)
<br/><br/>
9. Once the instance is created, click on the instances tab to go the the EC2 instances dashboard
![Screenshot from 2023-02-02 10-54-09](https://user-images.githubusercontent.com/37503046/216307509-adcb11dd-f348-4b6a-9072-fd3f009acba0.png)
<br/><br/>
10. Select the instance and copy the public ip address. We will use that to login to the instance via ssh.
![Screenshot from 2023-02-02 10-54-29](https://user-images.githubusercontent.com/37503046/216307756-956498e7-accf-4b13-a6c7-2f94eb706925.png)
<br/><br/>
11. Open your bash terminal and run these commands to access the instance via terminal.
```js
cd Downloads/
sudo -s
chmod 400 microsvc-key.pem
ssh -i microsvc-key.pem ubuntu@ip   #ip is the copied public ip of the EC2 instance.
```
<br/>
12. Confirm that docker is installed and ubuntu is added as a user to the docker group with these commands.

```js
docker --version
docker-compose --version
id
```
<br/>
13. Once everything is in order, we clone the app from github and run the docker-compose file to build it. Use the commands below to fetch the app and build it. Please note that this might take sometime so be patient.

```js
git clone https://github.com/Ben74x/emart-app.git
cd emart-app/
ls
docker-compose build
```
<br/>
14. Confirm that the build was successful by checking the images on the instance with this command.

```js
docker images
```
<br/>
15. Now to run the app we need to run the docker compose up command. We want to see how the app is built and run so we will not use the -d option. All the logs will be displayed on the terminal for you to see how the app is run. If you want to run in the background, use the second command instead.

```js
docker-compose up   # First command

docker-compose up -d # Second command
```
<br/>
16. Once the app is up and running, you can access it on your instance ip with port 80. Type your instance ip with port 80 (ip:80) in a web browser and it should look like the pic below.

![Screenshot from 2023-02-02 11-40-53](https://user-images.githubusercontent.com/37503046/216316579-5be903fa-5efa-4670-8ec8-de3edc720114.png)
<br/><br/>

That sums up the project. Now, whenever a developer makes a code change, we can just pull the new changes from git and build the images again. The extraordinary thing about docker is that once an image is built, it is not going to build from scratch again. There are already image layers that are cached so only the changes will be built. Furthermore, it's always encouraged to make small changes a lot of times in microservice rather than making huge changes. The only disadvantage is that, for each change you have to build the image once again and run the container. All this can be automated by using *CI/CD* pipeline and you won't have to do a thing. That's the beauty of DevOps!

<br/>

<h2 id="Cleanup">Cleanup</h2>

Congratulations if you've gotten this far. I told myself this once I saw the web app on my browser. It is good to always practice and develop your skills. Now let's clean up the services before AWS charges us. Follow the steps below to make sure everything is down.
<br/>
- Bring the container down by pressing *Ctrl + C*, if you run docker compose in the background, run the command: *docker-compose down*
- Once the app is down, head to your EC2 instance dashboard
- Select your instance , click instance state and select terminate instance
- Once the instance is terminated, click the EC2 dashboard in the top left corner
- Select key pairs and delete the one you created
- Go back to the EC2 dashboard
- Select Security groups and delete the one you created. Becareful when deleting this security group because there is a default one there. Make sure you don't delete that one instead.



<a href="#top">Go to top page</a>
