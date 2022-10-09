---
title: Amazon Lex & Rekognition Project, AI/ML Serverless
date: '2022-07-31T20:12:37.00Z'
description: 'Using AWS AI/ML services to create a website that uses image recognition and chatbot'
---


Hello, Ola, Ciao, Bonjour, Hallo. Well well let's just say I was getting bored of using the same introduction in my blogs so I wanted to switch up a little :). In this blog we are going to utilize some of the AI/ML services in AWS. We are going to build a serveless website that uses image recognition and a chatbot system. AWS has services that can be used to create these with ease instead of taking time to train these ML models from scratch...Amazing right?
I'm going to assume you know how to host static websites on S3. If you don't know how to do that, I have a blog on it and you can check it out. To do this project, you are not expected to have any background knowledge in the AI?ML services. Having a general understanding of Javascript will be perfect for the project. Now let's focus on the AI/ML services. AWS has services that support the developments of chatbot and image recognition systems. These services are **Amazon Lex** and **Amazon Rekognition**

**Amazon Lex** is a fully managed artificial intelligence (AI) service with advanced natural language models to design, build, test, and deploy conversational interfaces in applications.![product-page-diagram_Amazon-Lex 4227debf7110b1f16add010b55be881aa37fbd7b](https://user-images.githubusercontent.com/37503046/194777633-ea63dcd9-a879-42bf-a8ce-31298912d80b.png)

It has the following use cases:
- **Build virtual agents and voice assistants**: Enable self-service capabilities with virtual contact center agents and interactive voice response (IVR). Users can change a password or schedule an appointment without speaking to a human agent.
- **Automate informational responses**: Design conversational solutions that provide responses to frequently asked questions. Improve Connect & Lex conversation flows for tech support, HR benefits, or finance with natural language search for FAQs powered by Amazon Kendra.
- **Improve productivity with application bots**: Automate basic user tasks in your application with powerful chatbots. Seamlessly connect with other enterprise software through AWS Lambda and maintain granular access control through IAM.
- **Maximize the information trapped in transcripts**: Design chatbots using existing contact center transcripts. Reduce design time from weeks to hours and accelerate bot deployment.
 


**Amazon Rekognition** is a service that makes it easy to add powerful visual analysis to your applications. Rekognition Image lets you easily build powerful applications to search, verify, and organize millions of images. Rekognition Video lets you extract motion-based context from stored or live stream videos and helps you analyze them.

Rekognition Image is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images. It also allows you to search and compare faces. Rekognition Image uses deep neural network models to detect and label thousands of objects and scenes in your images, and we are continually adding new labels and facial recognition features to the service. With Rekognition Image, you only pay for the images you analyze and the face metadata you store.
Rekognition Image uses deep neural network models to detect and label thousands of objects and scenes in your images, and we are continually adding new labels and facial recognition features to the service. With Rekognition Image, you only pay for the images you analyze and the face metadata you store.

Rekognition Video is a video recognition service that detects activities; understands the movement of people in frame; and recognizes objects, celebrities, and inappropriate content in videos stored in Amazon S3 and live video streams from Acuity. Rekognition Video detects persons and tracks them through the video even when their faces are not visible, or as the whole person might go in and out of the scene. For example, this could be used in an application that sends a real-time notification when someone delivers a package to your door. Rekognition Video allows you also to index metadata like objects, activities, scene, celebrities, and faces that make video search easy.

In this project, the aim is to build out an AWS Lex Chatbot and Amazon Rekognition Website and at the end of the project, you will be able to:

- Create a chatbot using AWS Lex
- Understand intents, slots and utterances
- Be able to add buttons to the chatbot responses
- Customise the responses that chatbots have using AWS Lambda
- Deploy the chatbot as a website using Amazon CloudFormation
- Use Amazon Rekognition to identify objects
- Create a website using HTML, CSS and Javascript
- Integrate Lex into a basic website
- Host a public website using Amazon S3 and Amazon CloudFront


Let's get started!!
