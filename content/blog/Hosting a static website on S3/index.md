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

1. In the **AWS Management Console**, on the `Services menu`, search for **S3** and choose it. ![image](https://user-images.githubusercontent.com/37503046/191600610-36202a4f-2d7f-4d98-a4e0-bb20f627ed74.png)

3. Choose `Create bucket`. 
4. Enter a **bucket name**. An S3 bucket name is globally unique, and the namespace is shared by all AWS accounts. After you create a bucket, the name of that bucket cannot be used by another AWS account in any AWS Region unless you delete the bucket. 
5. Select the **AWS region** in which the S3 bucket will be created. Try to select a region near the public that will access the website.
6. In the **Object Ownership section**, select **ACLs disabled**, then verify **Bucket owner enforced** is selected.
7. Clear **Block all public access**, then select the box that states **I acknowledge that the current settings may result in this bucket and the objects within becoming public.**
8. Choose `Create bucket`.

