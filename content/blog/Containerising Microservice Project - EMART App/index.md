---
title: Containerising Microservice Project - Emart App
date: '2023-01-14T20:12:37.00Z'
description: 'Packaging a microservice app into a docker container for easy deployment'
---


<a name="top"></a>

## Content
- <a href="#App Description">App Description</a>
- <a href="#Implementation">Implementation</a>

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
