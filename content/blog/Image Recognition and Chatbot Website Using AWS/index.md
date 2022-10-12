---
title: Amazon Lex & Rekognition Project, AI/ML Serverless
date: '2022-07-31T20:12:37.00Z'
description: 'Using AWS AI/ML services to create a website that uses image recognition and chatbot'
---
<a name="top"></a>



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
<h2 id="Building the chatbot">Building the chatbot</h2>
For this project we will use Amazon Cloudfront, Cloudformation, Cognito, Lambda, Lex, S3 and Rekogntion. I recommend having a code editor such as Visual Studio Code , to complete Amazon Rekogntion website integration and Amazon Lex website integration


<h3 id="Basic Voice Interactions">Basic Voice Interactions</h3>

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
<img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2022-06-08.png" alt=""> </br>
<img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2022-06-16.png" alt=""> </br></br>

**What are slot types?**
Each slot has a type. You can create your custom slot types or use built-in slot types. For example, you might create and use the following slot types for the intent:

Size – With values Small , Medium and Large.

Crust – With values Thick and Thin.

Amazon Lex also provides built-in slot types. For example, AMAZON.NUMBER is a built-in slot type that you can use for the number of pizzas ordered. </br></br>
8. Name the slot type as FlavourType and add the values strawberry, watermelon and lemon. Click `Add slot to intent`. This can be seen in the images below. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2022-23-57.png" alt=""> </br></br>
9. Click on create slot type again and this time have the slot type name of SizeType with values of small, medium and large. Click `Add slot to intent`. </br></br>
10. Create the last slot type which is DrinkType and add the values ice tea, energy drink and flavoured water. Click `Add slot to intent`. </br></br>
11. Within the slots section, change the name and prompt for the corresponding slots. Repeat this for flavour, size and drink slot types. Mark all slots as required and fill in the slots as shown in the image below. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2022-37-13.png" alt=""> </br></br></br>

**What are slots?**
These are elements within your utterances that may change based on the user wanting different variations to their actions.

E.g. “I want to order a pepperoni pizza” versus “I want to order a vegetarian pizza.”

In this example, pepperoni and vegetarian can be classified as a slot called "flavour". This means the sample utterance can be fulfilled with "I want to order a {flavour} pizza" instead.

When the chatbot starts running, Amazon Lex prompts the user for specific slot values. The user must provide values for all required slots before Amazon Lex can fulfill the intent. </br></br>

12. Input the sample utterances by copying and pasting the below text in the sample utterances text box and pressing Enter. You can input other utterances that you think a user would say when they order drinks from the canteen.

`1. I would like a {size} {flavour} {drink} please`

`2. Can I have a {size} {drink}`

`3. I want a {drink}` </br></br>

**What are utterances?**
What a user might say to trigger this intent. For example, a user might say "Can I order a pizza please" or "I want to order a pizza".

**Note**:
Make sure to leave a space before and after the slot values.


Incorrect Declaration due to no spaces between the slots - {size}{drink}{flavour}


Correct Declaration - {size} {drink} {flavour} </br></br>

13. Click `Build` on the top right corner of the page. </br></br>
14. Test the bot by clicking the right hand side `Test Chatbot` toolbar to expand the chatbot window. </br></br>
15. Type `I would like a small watermelon energy drink`, there should be a response of `Intent OrderDrink is ReadyForFulfillment: drink\:energy drink flavour\:watermelon size\:small`. This can be seen in the image below. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-11%2022-58-58.png" alt="">

Congratulations, you have just built a basic voice interface for the chatbot! You built out a basic voice interaction using the Amazon Lex service. You also learnt about intents, slots, slot types and utterances and was able to make it function as intended.



<h3 id="Lambda Integration">Lambda Integration</h3>
In the previous section we were able to build out the basic voice interactions on Amazon Lex. The chatbot received your response and knows that you want to order a small watermelon energy drink. Now you need to add extra responses from the chatbot so your user knows that it has received it properly. To do this we will need to use the Lambda service.

**How to fulfill the intent?**
You can undertake custom actions once the intent is triggered. This can be done via code and we recommend that you create a Lambda function to fulfill the intent. Lambda Functions are pieces of code that you can write on the AWS console to perform custom actions.


1. Go to Lambda by searching for the service on the top left hand corner like below and click on the lambda service. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2012-09-17.png" alt=""> </br></br></br>
2. You should see the below dashboard, so click `Create function`. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2012-10-10.png" alt=""> </br></br></br>
3. Select `Author from scratch` and set the function name as `CanteenBot`. Have the runtime set to `Node.js.14.x`. and click `Create function`. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2012-11-46.png" alt=""> </br></br></br>
4. Delete the code that is within index.js (highlighted in blue in the image below) and leave that file blank. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2012-14-24.png" alt=""> </br></br></br>
5. Copy and paste the below code within index.js.
```js
'use strict';
    // --------------- Helpers to build responses which match the structure of the necessary dialog actions -----------------------

    function close(sessionAttributes, fulfillmentState, message, responseCard) {
        return {
            sessionAttributes,
            dialogAction: {
                type: 'Close',
                fulfillmentState,
                message,
                responseCard,
            },
        };
    }

    // --------------- Functions that control the skill's behavior -----------------------

    //Used to fulfill the ordering for canteen food.

    //Function where the intent request is submitted and where you can customise.
    function OrderDrink(intentRequest, callback) {

        const outputSessionAttributes = intentRequest.sessionAttributes;
        const source = intentRequest.invocationSource;
        console.log(intentRequest);

        if (source === 'FulfillmentCodeHook') {

            //Used once all slots are fulfilled.

            const slots = intentRequest.currentIntent.slots;
            console.log(slots);
            const drink = slots.drink;
            const size = slots.size;
            const flavour = slots.flavour

            //Change anything after 'content:' to display another message
            //apart from the usual "Great! Your drink is available for pickup soon. Thanks for using CanteenBot!"
            //To refer to the drink, size and flavour variables - use ${drink}, ${size} and ${flavour} within your bracketed text.

            callback(close(outputSessionAttributes, 'Fulfilled', {
                contentType: 'PlainText',
                content: `Great!  Your ${size} ${flavour} ${drink} will be available for pickup soon.  Thanks for using CanteenBot!`
            }));
            return;
        }

    }

    // --------------- Intents -----------------------

    /**Called when the user specifies an intent for this skill.*/

    function dispatch(intentRequest, callback) {

        console.log(`intent=${intentRequest.currentIntent.name}`);

        const name = intentRequest.currentIntent.name;
        console.log(name);

        // dispatch to the intent handlers - checks if the intent is OrderDrink and then initiates that function.
        if (name.startsWith('OrderDrink')) {
            return OrderDrink(intentRequest, callback);
        }
        throw new Error(`Intent with name ${name} not supported`);
    }

    // --------------- Main handler -----------------------

    // Route the incoming request based on intent.
    // The JSON body of the request is provided in the event slot.
    exports.handler = (event, context, callback) => {

        console.log(JSON.stringify(event));

        try {
            dispatch(event, (response) => callback(null, response));
        } catch (err) {
            callback(err);
        }
    };

    /*MIT No Attribution

    Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Permission is hereby granted, free of charge, to any person obtaining a copy of this
    software and associated documentation files (the "Software"), to deal in the Software
    without restriction, including without limitation the rights to use, copy, modify,
    merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
    PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/
``` 
</br></br>
6. Click `Deploy` in the right-hand corner above the code console to save the code.</br></br>
7. Click on `Services` on the top left corner and search for `Lex`. Click on `Amazon Lex` to go back to our previous Amazon Lex service.</br></br>
8. Once you go back to Amazon Lex select your intent. Within the Fulfillment section of the page , select `AWS Lambda Function` and within the drop down choose `CanteenBot`. A popup should appear like the image below. Select `OK` to use the Lambda function. Version should be set to `Latest` by default. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2012-44-06.png" alt=""> </br></br></br>
9. Click `Build` on the top right-hand corner so Amazon Lex registers the lambda function.</br></br>
10. Test the bot by clicking the right hand side `Test Chatbot` toolbar to expand the chatbot window.</br></br>
11. Type `I would like a small watermelon energy drink`. If successful, there should be a response of “Great! your {drink} will be available for pickup soon. Thanks for using CanteenBot!”. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2012-59-40.png" alt=""> </br></br></br>

Congratulations ! You’ve built your first CanteenBot that can order drinks! You have been able to create an interactive chatbot by using Lambda to respond to the user interaction specified in the first section of this chatbot tutorial. To understand the flow diagram for the chatbot, you can observe this below.


<img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Picture10.png" alt=""> </br></br></br> 

<h2 id="Additional Features">Additional Features</h2>
In this section, we are going to add buttons to the responses of your questions to enhance the chatbot. We are also going to use a prepared template to launch the chatbot into a live website.


<h3 id="Adding Buttons">Adding Buttons</h3>
1. Go to the Amazon Lex console and select your chatbot by clicking on the name.</br></br>
2. Go to the slot where you want to see buttons for the responses and select the settings icon on the far right. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2013-44-43.png" alt=""> </br></br></br>
3. A popup should appear as below and you can scroll down to fill in the values corresponding to the buttons and click Save. 

**Note**: Make sure to fill in the title, subtitle section, button title and button values. The image url section should be this url https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/drinks.jpeg. You can also use your own image but make sure it ends with an image format (.png, .jpeg)

<img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2013-51-46.png" alt=""> </br></br></br>
4. Build the chatbot. </br></br>
5. Test the chatbot by typing `I want a drink` and an image with the corresponding options as buttons should be displayed. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2013-57-35.png" alt=""> </br>

**You should now see buttons for your responses!** </br></br>



<h3 id="Lex Website">Lex Website</h3>

1. Once you have finished making your chatbot. You can publish it by clicking on the publish button on the top right. </br></br>
2. Type in `PublishCanteenBot` as the alias in the popup window and click Publish. </br></br>
3. Publishing the chatbot will take a few seconds with the below popup appearing once published. Copy down the BotName and alias as you will use this at a later step. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2014-24-43.png" alt=""> </br></br></br>
4. Open another tab and go to the link <a href="https://github.com/aws-samples/aws-lex-web-ui">The AWS Samples github Lex Web UI page</a>. It is a github repo that contains stacks on Amazon Lex web interface quick setups. </br></br>
5. Scroll down the page until you see the Getting Started section and click on deploy stack for the Northern Virginia (us-east-1) region (or the region you have been using in this workshop) as seen with the below screenshot. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2014-39-20.png" alt=""> </br></br></br>
6. Set the Stack Name as `WebsiteChatbot`. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2014-49-35.png" alt=""> </br></br></br>
7. We created a V1 bot, so fill out the variables for **Lex V1 Lex V1 Bot Configuration Parameters**. Set the BotName and BotAlias to your own bot name and alias that you noted down prior. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2014-50-03.png" alt=""> </br></br></br>
8. Scroll down to **WebAppConfBotInitialText** to set the initial text that you want dispalyed on the website chatbot. Change the **WebAppConfBotInitialSpeech** to specify what you want the website to say if microphone is used. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2014-50-59.png" alt=""> </br></br></br>
9. Change the **WebAppConfToolbarTitle** to specify what you want the toolbar on the website to say. Such as 'Canteen Bot'. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2014-51-29.png" alt=""> </br></br></br>
10. Agree to the terms and conditions and click `Create Stack`. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2014-52-05.png" alt=""> </br></br></br>
11. Wait around 5-10 minutes for the website to deploy. </br></br>
12. Once the CloudFormation stack is complete as shown with the below screenshot, select the output tab to find your chatbot website URL. The link for your web application is found under the title WebAppUrl as seen below. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2015-13-51.png" alt=""> </br></br></br>

13. Browse to the URL and you should see your website live like the below screenshot. You can experiment with the website like I've done. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2015-17-58.png" alt=""> </br></br></br>


<h2 id="Amazon Rekognition">Amazon Rekognition</h2>

We will test how AWS Rekognition undertakes image recognition using the AWS console. We will also set up  Amazon Cognito Identity Pool so that we can log on to the website. Then, we will use a template to create a Rekognition demo on a live website. Finally, we will be use a template to add your chatbot into the live website. Let's break it down one by one


<h3 id="Console Demo">Console Demo</h3>

1. Once you have logged into the AWS Console, search for Amazon Rekognition and click on it. </br></br>
2. On the left, under the `Demos title`, click on `Label Detection`. You should see the below image recognition once you click on the link. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2015-48-11.png" alt=""> </br></br></br>
3. Expand `Request` and `Response` on the right hand side to see the general JSON format that Rekognition responds with. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2015-49-53.png" alt=""> </br></br></br>
4. Click on the bottom `Upload` button at the bottom to upload your own image for Object and Scene Detection. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2015-50-04.png" alt=""> </br></br></br>
5. Click on `Facial Analysis` on the left hand side and repeat steps 3 and 4. </br></br>
6. Click on `Celebrity Recognition` on the left hand side and repeat steps 3 and 4. </br></br>
7. Click on `Face Comparison` on the left hand side and repeat steps 3 and 4. </br></br>
8. Click on `Text in image` on the left hand side and repeat steps 3 and 4. </br></br>


This is just one way to use Rekognition. Next we will be embedding it into a website.



<h3 id="Amazon Cognito">Amazon Cognito</h3>
Once you have finished testing the Rekognition demo. You can create an Amazon Cognito role for website integration. Amazon Cognito identity pools provide temporary AWS credentials for users who are guests (unauthenticated) and for users who have been authenticated and received a token. An identity pool is a store of user identity data specific to your account. Using identity pools, we will allow any users that access our website to utilise Amazon Rekognition and Amazon Lex.


1. From the AWS Console, type Cognito and click on it. </br></br>
2. Click on `Manage Identity Pools`. </br></br>
3. Click on `Create new identity pool`. </br></br>
4. Add an `identity pool name`, tick the `Unauthenticated Identities` box and click `Create Pool`. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2016-12-39.png" alt=""> </br></br></br>
5.  Expand the `View Details` section, note down the role name for authenticated and unauthenticated identities. Click `Allow` when you're done. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2016-13-52.png" alt=""> </br></br></br>
6.  On the new page, note down the **Identity Pool ID**, you will need this in the next section. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2016-14-29.png" alt=""> </br></br></br>
7.  On the services dropdown on the top, expand and search for `IAM`. </br></br>
8.  On the IAM page, click on `Roles` on the left hand side.
9.  In the search bar, search for the unauthenticated role you noted down in Step 4 and click into it.
10.  Click `Attach Policies` to attach new policies for this role. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2016-16-09.png" alt=""> </br></br></br>
11.  Search for the **AmazonLexRunBotsOnly** and select the box on the left hand side. </br></br>
12.  Search for **AmazonRekognitionReadOnly** policy, select the box on the left hand side. </br></br>
13.  Once all the policies are selected, click `Attach Policy` at the bottom. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2016-17-24.png" alt=""> </br></br></br>
14.  You should now see the policies attached to your role. <img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Image%20Recognition%20and%20Chatbot%20Website%20Using%20AWS/Screenshot%20from%202022-10-12%2016-18-02.png" alt=""> </br>

**This concludes the creation of Cognito Identities to use with the website**














<a href="#top">Back to top of page</a>







