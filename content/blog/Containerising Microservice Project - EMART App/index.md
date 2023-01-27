---
title: Containerising Microservice Project - Emart App
date: '2023-01-14T20:12:37.00Z'
description: 'Packaging a microservice app into a docker container for easy deployment'
---


Hello and Happy New Year!! I know we are 2 weeks into the year but if I'm being honest, I still have my Christmas decorations up so I'm still in the new year mood. In this blog, we are going to cover containers. Yup! I know what you are thinking. The title is not different from what we're going to talk about. The blog will cover how to package a microservice app into a docker container for easy deployment. Now what is a microservice? I'm sure you might have an idea of what it is but if you don't, here is how I summarize what it is. Microservice is an architectural style that divides an application into a number of services that can be deployed separately, are loosely coupled, highly maintainable and testable. Large, sophisticated applications may be delivered quickly, often, and reliably thanks to the microservice design. It also enables an organization to evolve its technology stack.

![Screenshot from 2023-01-27 14-44-01](https://user-images.githubusercontent.com/37503046/215114064-db891def-4a82-4448-807a-17eac31d5657.png)

Look at the image above, now imaging if that was an application. The application is divided into a number of smaller independent units rather than being one large unified unit. Every application service is handled separately by these units. As a result, each service performs specialised tasks, has its own logic and database, and communicates with other services either by using message brokers or APIs. Now isn't that amazing? Of course it is!! Adopting microservices often goes hand in hand with DevOps, since they are the basis for continuous delivery practices that allow teams to adapt quickly to user requirements. As a DevOps Engineer, you will undoubtedly deal with a microservice architecture because it is here to stay. As such, you should be able to package and deploy one without difficulty.
