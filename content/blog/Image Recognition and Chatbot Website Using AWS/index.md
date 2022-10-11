---
title: Amazon Lex & Rekognition Project, AI/ML Serverless
date: '2022-07-31T20:12:37.00Z'
description: 'Using AWS AI/ML services to create a website that uses image recognition and chatbot'
---


Hello, Hola, Ciao, Bonjour, Hallo. Well well let's just say I was getting bored of using the same introduction in my blogs so I wanted to switch up a little :). In this blog we are going to utilize some of the AI/ML services in AWS. We are going to build a serveless website that uses image recognition and a chatbot system. AWS has services that can be used to create these with ease instead of taking time to train these ML models from scratch...Amazing right?
I'm going to assume you know how to host static websites on S3. If you don't know how to do that, I have a blog on it and you can check it out. To do this project, you are not expected to have any background knowledge in the AI?ML services. Having a general understanding of Javascript will be perfect for the project. Now let's focus on the AI/ML services. AWS has services that support the developments of chatbot and image recognition systems. These services are **Amazon Lex** and **Amazon Rekognition**

**Amazon Lex** is a fully managed artificial intelligence (AI) service with advanced natural language models to design, build, test, and deploy conversational interfaces in applications.![product-page-diagram_Amazon-Lex 4227debf7110b1f16add010b55be881aa37fbd7b](https://user-images.githubusercontent.com/37503046/194777633-ea63dcd9-a879-42bf-a8ce-31298912d80b.png)

It has the following use cases:
- **Build virtual agents and voice assistants**: Enable self-service capabilities with virtual contact center agents and interactive voice response (IVR). Users can change a password or schedule an appointment without speaking to a human agent.
- **Automate informational responses**: Design conversational solutions that provide responses to frequently asked questions. Improve Connect & Lex conversation flows for tech support, HR benefits, or finance with natural language search for FAQs powered by Amazon Kendra.
- **Improve productivity with application bots**: Automate basic user tasks in your application with powerful chatbots. Seamlessly connect with other enterprise software through AWS Lambda and maintain granular access control through IAM.
- **Maximize the information trapped in transcripts**: Design chatbots using existing contact center transcripts. Reduce design time from weeks to hours and accelerate bot deployment.
 


**Amazon Rekognition** is a service that makes it easy to add powerful visual analysis to your applications. Amazon Rekognition is based on the same proven, highly scalable, deep learning technology developed by Amazon’s computer vision scientists to analyze billions of images and videos daily. It requires no machine learning expertise to use. It also includes a simple, easy-to-use API that can quickly analyze any image or video file that’s stored in Amazon S3. Amazon Rekognition is always learning from new data, and we’re continually adding new labels and facial comparison features to the service. Common use cases for using Amazon Rekognition include the following:

- **Searchable image and video libraries**: It makes images and stored videos searchable so you can discover objects and scenes that appear within them.
 
- **Face-based user verification**: It enables your applications to confirm user identities by comparing their live image with a reference image.

- **Detection of Personal Protective Equipment**: It detects Personal Protective Equipment (PPE) such as face covers, head covers, and hand covers on persons in images. You can use PPE detection where safety is the highest priority. For example, industries such as construction, manufacturing, healthcare, food processing, logistics, and retail. With PPE detection, you can automatically detect if a person is wearing a specific type of PPE. You can use the detection results to send a notification or to identify places where safety warnings or training practices can be improved.

- **Sentiment and demographic analysis**: It interprets emotional expressions such as happy, sad, or surprise, and demographic information such as gender from facial images. Amazon Rekognition can analyze images, and send the emotion and demographic attributes to Amazon Redshift for periodic reporting on trends such as in store locations and similar scenarios. Note that a prediction of an emotional expression is based on the physical appearance of a person's face only. It is not indicative of a person’s internal emotional state, and Rekognition should not be used to make such a determination.

- **Facial Search**: With Amazon Rekognition, you can search images, stored videos, and streaming videos for faces that match those stored in a container known as a face collection. A face collection is an index of faces that you own and manage.  

- **Unsafe content detection**: It can detect adult and violent content in images and in stored videos. Developers can use the returned metadata to filter inappropriate content based on their business needs. Beyond flagging an image based on the presence of unsafe content, the API also returns a hierarchical list of labels with confidence scores. These labels indicate specific categories of unsafe content, which enables granular filtering and management of large volumes of user-generated content (UGC). Examples include social and dating sites, photo sharing platforms, blogs and forums, apps for children, ecommerce sites, entertainment, and online advertising services.

- **Celebrity recognition**: It can recognize celebrities within supplied images and in videos. Amazon Rekognition can recognize thousands of celebrities across a number of categories, such as politics, sports, business, entertainment, and media.

- **Text detection**: Amazon Rekognition Text in Image enables you to recognize and extract textual content from images. Text in Image supports most fonts, including highly stylized ones. It detects text and numbers in different orientations, such as those commonly found in banners and posters. In image sharing and social media applications, you can use it to enable visual search based on an index of images that contain the same keywords. In media and entertainment applications, you can catalog videos based on relevant text on screen, such as ads, news, sport scores, and captions. Finally, in public safety applications, you can identify vehicles based on license plate numbers from images taken by street cameras.

 - **Custom labels**: With Amazon Rekognition Custom Labels, you can identify the objects and scenes in images that are specific to your business needs. For example, you can find your logo in social media posts, identify your products on store shelves, classify machine parts in an assembly line, distinguish healthy and infected plants, or detect animated characters in videos. For more information, see What is Amazon Rekognition Custom Labels? in the Amazon Rekognition Custom Labels Developer Guide.


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

1. Once you have logged into the AWS Console, search for Amazon Lex in the search bar like the picture below. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2021-03-18.png" alt=""> </br></br></br>
2. Click on the Amazon Lex console to see the below page and click on the `Get Started` button. Note that I am using the V1 console for the Amazon Lex service. If your version is V2 you can switch to the V1 console. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2021-07-09.png" alt=""> </br></br></br>
3. Select `Custom Bot` and fill in the page with the below information.
<table>
  <tr>
    <th>Field</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Custom Name</td>
    <td>CanteenBot</td>
  </tr>
  <tr>
    <td>Language</td>
    <td>English(UK)</td>
  </tr>
  <tr>
    <td>Output Voice</td>
    <td>Amy</td>
  </tr>
  <tr>
    <td>Session Timeout</td>
    <td>    5</td>
  </tr>
  <tr>
    <td>Sentiment Analysis</td>
    <td>        No</td>
  </tr>
  <tr>
    <td>IAM Role</td>
    <td>Leave as is</td>
  </tr>
  <tr>
    <td>COPPA</td>
    <td>Yes</td>
  </tr>
</table>  
</br>

4. Click `Create` </br></br>
5. You should see the below image and start creating the chatbot by clicking `Create Intent` and also clicking `Create Intent` in the popup window. An intent represents an action that users want to perform. You create a bot to support one or more related intents. For example, you might create a bot that orders pizza and drinks. This would mean you’ll create an OrderFood intent and an OrderDrink intent as these are two separate actions.
<img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2021-53-20.png" alt=""> </br>
<img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2021-58-23.png" alt=""> </br></br>
6. Name your intent “OrderDrink” and click `Add`. You should see the below images as a result. </br></br>
7. Create the slot types that can be used in you sample utterances later on. Click on the plus sign next to slot types on the left hand side and click on `create slot type`.
