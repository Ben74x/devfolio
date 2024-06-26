---
title: Hosting a static website on S3
date: '2022-07-22T20:12:37.00Z'
description: 'Hosting a static website on Amazon S3'
---


In this blog we are going to learn more about Amazon Web Services (AWS) via a practical example, and that is hosting a static website on Amazon Simple Storage Service (S3). This is one of the projects that I picked up in AWS academy summer training and I am happy to share it with you all. Amazon S3 is a scalable, high-speed, web-based cloud storage service. The service is designed for online backup and archiving of data and applications on AWS. Amazon S3 was designed with a minimal feature set and created to make web-scale computing easier for developers. It provides 99.999999999% durability for objects stored in the service and supports multiple security and compliance certifications. An administrator can also link Amazon S3 to other AWS security and monitoring services, including CloudTrail, CloudWatch and Macie. 

There's also an extensive partner network of vendors that link their services directly to Amazon S3. Data can be transferred to S3 over the public internet via access to S3 application programming interfaces (APIs). There's also Amazon S3 Transfer Acceleration for faster movement over long distances, as well as AWS Direct Connect for a private, consistent connection between S3 and an enterprise's own data center. An administrator can also use AWS Snowball, a physical transfer device, to ship large amounts of data from an enterprise data center directly to AWS, which will then upload it to S3. In addition, users can integrate other AWS services with S3. For example, an analyst can query data directly on S3 either with Amazon Athena for ad hoc queries or with Amazon Redshift Spectrum for more complex analyses. Amazon S3 can be used by organizations ranging in size from small businesses to large enterprises. S3's scalability, availability, security and performance capabilities make it suitable for a variety of data storage use cases. Common use cases for S3 include data storage, data archiving, software delivery, website hosting, etc.

Static websites have fixed content with no backend processing. They can contain HTML pages, images, style sheets, and all files that are needed to render a website. However, static websites do not use server-side scripting or a database. If you want your static webpages to provide interactivity and run programming logic, you can use JavaScript that runs in the user's web browser. You can easily host a static website on S3 by uploading the content and making it publicly accessible. No servers are needed, and you can use Amazon S3 to store and retrieve any amount of data at any time, from anywhere on the web. After reading the blog and completing the project with me, you will be able to:

- Create a bucket in Amazon S3
- Upload content to your bucket
- Enable access to the bucket objects
- Update the website

Let's get to work!!


### Creating a bucket in Amazon S3

1. In the **AWS Management Console**, on the `Services menu`, search for **S3** and choose it. ![image](https://user-images.githubusercontent.com/37503046/191600610-36202a4f-2d7f-4d98-a4e0-bb20f627ed74.png) <br/> <br/> <br/>
2. Choose `Create bucket`. ![image](https://user-images.githubusercontent.com/37503046/191602096-ed14f6c6-2f6f-44f2-8b26-8bd094282a4a.png) <br/> <br/> <br/>
3. Enter a **bucket name**. An S3 bucket name is globally unique, and the namespace is shared by all AWS accounts. After you create a bucket, the name of that bucket cannot be used by another AWS account in any AWS Region unless you delete the bucket. <br/> <br/>
4. Select the **AWS region** in which the S3 bucket will be created. Try to select a region near the public that will access the website. <br/> <br/>
5. In the **Object Ownership section**, select **ACLs disabled**, then verify **Bucket owner enforced** is selected. ![image](https://user-images.githubusercontent.com/37503046/191602321-3d1285b5-bc5e-4bb3-8e1a-1dedadc2c7e7.png) <br/> <br/> <br/>
6. Clear **Block all public access**, then select the box that states **I acknowledge that the current settings may result in this bucket and the objects within becoming public.** ![image](https://user-images.githubusercontent.com/37503046/191602531-a9c76751-8e49-48b9-9678-d6f4ea22b247.png) <br/> <br/> <br/>
7. Choose `Create bucket`. ![image](https://user-images.githubusercontent.com/37503046/191602666-edbc6535-304f-460d-af67-3af706648682.png) <br/> <br/> <br/>
8. Choose the name of your new bucket. ![image](https://user-images.githubusercontent.com/37503046/191980151-64d75e40-be68-4808-857e-83cd677d933a.png) <br/> <br/> <br/>
9. Choose the  Properties tab. <br/> <br/>
10. Scroll to the Static website hosting panel. <br/> <br/>
11. Choose `Edit`. ![image](https://user-images.githubusercontent.com/37503046/191981554-4f1fb8ad-7288-4ebe-82aa-dccaee3e7a7f.png) <br/> <br/> <br/>
12. Configure the following settings: <br/>
**Static web hosting**: Enable <br/>
**Hosting type**: Host a static website <br/>
**Index document**: index.html. <br/>
Note that you must enter this value, even though it is already displayed. <br/>
**Error document**: error.html <br/> <br/>
13. Choose `Save Changes` ![image](https://user-images.githubusercontent.com/37503046/191988635-94b77621-c97e-4ff8-bffe-ae21f6b8217b.png)<br/> <br/> <br/>
14. In the Static website hosting panel, choose the link under Bucket website endpoint. You will receive a 403 Forbidden message because the bucket permissions have not been configured yet. Keep this tab open in your web browser so that you can return to it later. ![image](https://user-images.githubusercontent.com/37503046/191990443-8be991cf-d109-4ef3-9e4b-1847ea109568.png) <br/> <br/> <br/>


**Your bucket has now been configured to host a static website.** <br/> <br/> <br/>




### Upload website content to the bucket
We will upload the files that will serve as your static website to the bucket. The files can be found in this <a href="https://github.com/Ben74x/s3-static">github repo</a>. Download the files and follow the steps below to serve it to the bucket. <br/> <br/>

15. Return to the Amazon S3 console and in the website bucket you created earlier, choose the Objects tab. <br/> <br/>
16. Choose `Upload` ![image](https://user-images.githubusercontent.com/37503046/191996201-305778f3-f661-42d2-a99b-c4d9242b4edd.png) <br/> <br/> <br/>
17. Choose `Add files`. <br/> <br/>
18. Locate and select the 3 files that you downloaded. <br/> <br/>
19. If prompted, choose I acknowledge that existing objects with the same name will be overwritten. <br/> <br/>
20. Choose `Upload` ![image](https://user-images.githubusercontent.com/37503046/191996981-fe3f4b2f-30ec-4dea-b36d-3186fcdf8761.png) <br/> <br/> <br/>
21. Once the files have been uploaded, choose `Close` ![image](https://user-images.githubusercontent.com/37503046/191997476-46757a82-21cd-48cc-8a36-7ea9b01fc8bf.png) <br/> <br/> <br/>



### Enabling access to the objects
Objects that are stored in Amazon S3 are private by default. This ensures that your organization's data remains secure. We will make the uploaded objects publicly accessible. We confirmed that the website is not accesible from the 403 Forbidden message we received when we accessed the link. This response is expected! This message indicates that the static website is being hosted by Amazon S3, but that the content is private. You can make Amazon S3 objects public through two different ways:
- To make either a whole bucket public, or a specific directory in a bucket public, use a bucket policy.
- To make individual objects in a bucket public, use an access control list (ACL).

It is normally safer to make individual objects public because this avoids accidentally making other objects public. However, if you know that the entire bucket contains no sensitive information, you can use a bucket policy. We will now configure the individual objects to be publicly accessible.

 
22. Return to the Amazon S3 console and in the website bucket, choose the Objects tab. <br/> <br/>
23. Select all three objects. <br/> <br/>
24. In the Actions menu, choose Make public via ACL. ![image](https://user-images.githubusercontent.com/37503046/192004415-28da5dfb-13c2-4f5b-90e0-4593c4d12a8c.png) <br/> <br/> <br/>
25. Choose `Make public`. <br/> <br/> <br/>

The static website is now publicly accessible. Return to the web browser tab that has the 403 Forbidden message and refresh the webpage. You should now see the static website that is being hosted by Amazon S3. Because it is hosted on Amazon S3, the website has high availability and can serve high volumes of traffic without using any servers. You can also use your own domain name to direct users to a static website that is hosted on Amazon S3. To accomplish this, you could use the Amazon Route 53 Domain Name System (DNS) service in combination with Amazon S3. Creating, managing, and hosting websites and webpages and sharing data publicly is very important and crucial as this provides the public face of most brands and organizations. Looking at this perspective, AWS has developed a great idea to publicly provide an easy and simple solution for their users to host content using the S3 bucket. This guide describes simple steps to host your static website using the AWS S3 bucket. I hope you found this article helpful.


**Cheers!**

