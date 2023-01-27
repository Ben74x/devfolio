---
title: Containerising Microservice Project - Emart App
date: '2023-01-14T20:12:37.00Z'
description: 'Packaging a microservice app into a docker container for easy deployment'
---


<a name="top"></a>

## Content
- <a href="#App Description">Building the chatbot</a>
- <a href="#Additional Features">Additional Features</a>
- <a href="#Amazon Rekognition">Amazon Rekognition</a>
- <a href="#Website Hosting">Website Hosting</a>
- <a href="#Cleanup">Cleanup</a>

Hello and Happy New Year!! I know we are 2 weeks into the year but if I'm being honest, I still have my Christmas decorations up so I'm still in the new year mood. In this blog, we are going to cover containers. Yup! I know what you are thinking. The title is not different from what we're going to talk about. The blog will cover how to package a microservice app into a docker container for easy deployment. Now what is a microservice? I'm sure you might have an idea of what it is but if you don't, here is how I summarize what it is. Microservice is an architectural style that divides an application into a number of services that can be deployed separately, are loosely coupled, highly maintainable and testable. Large, sophisticated applications may be delivered quickly, often, and reliably thanks to the microservice design. It also enables an organization to evolve its technology stack.

![Screenshot from 2023-01-27 14-44-01](https://user-images.githubusercontent.com/37503046/215114064-db891def-4a82-4448-807a-17eac31d5657.png)

Look at the image above, now imaging if that was an application. The application is divided into a number of smaller independent units rather than being one large unified unit. Every application service is handled separately by these units. As a result, each service performs specialised tasks, has its own logic and database, and communicates with other services either by using message brokers or APIs. Now isn't that amazing? Of course it is!! Adopting microservices often goes hand in hand with DevOps, since they are the basis for continuous delivery practices that allow teams to adapt quickly to user requirements. As a DevOps Engineer, you will undoubtedly deal with a microservice architecture because it is here to stay. As such, you should be able to package and deploy one without difficulty. One way you can do that is to use Docker.

Docker is an open source virtualization technology that serves as a software container platform. These containers allow you to enclose an application, complete with its own filesystem, in a single, replicable package. Docker containers, which originated from open source collaboration, helped to revolutionise the world of software development. By encasing software in shells of code known as containers, which contain all of the resources the software requires to run on a server - tools, runtime, system libraries, and more - the software can perform consistently across multiple hosting platforms such as AWS, Google Cloud, Microsoft Azure, and Apache. 

Now that we have an understanding of what the project architecture might be like... Let's dive into it.

<h2 id="App Description">App Description</h2>

The app is an ecommerce application with multiple microservices. There are four services in total in the microservice app. To begin, **NGINX** serves as the **API gateway**, which is the front end from which all requests are received. This API gateway handles all communications between the other services. It listens for requests and routes them based on the headers in the URL. So, if a request is received on a **/**, that is, if you are simply accessing the URL, it is routed to the client microservice, which is written in **Angular**. This loads the website's frontend pages. The **Emart API**, written in **NodeJS**, is contacted for backend data, through the **/API**. The **NodeJs** service requires a database, and we use **MongoDB**, a NoSQL database, in this case. There is also another integration of another service, the **Books API**, which is written in **Java**. It makes use of the **MySQL** database, which is accessed via **/webapi**. The architecture can be seen below and the link to the project can be found <a href="https://github.com/Ben74x/emart-app">here.</a>

![Screenshot from 2023-01-27 15-04-40](https://user-images.githubusercontent.com/37503046/215135977-8dc3c8c5-b58b-4551-bac4-d47da79db862.png)






