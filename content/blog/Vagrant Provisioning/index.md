---
title: Vagrant Provisioning
date: '2022-07-15T20:12:37.00Z'
description: 'Using Infrastructure as code to automatically host a website on a VM'
---


In the previous blog, we set up a website on a centos7 VM. All of it was done manually and I mentioned in the previous blog that we will automate the whole process from start to finish using Vagrant Provisioning. We are going to put all the commands in Vagrant provisioning section and this is known as Infrastructure as code (IaC). By doing that, the website will be hosted automatically when we start the centos7 VM. Sounds cool right? Let's talk about Infrastructure as a code. Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes. With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes. Automating infrastructure provisioning with IaC means that developers don’t need to manually provision and manage servers, operating systems, storage, and other infrastructure components each time they develop or deploy an application. Codifying your infrastructure gives you a template to follow for provisioning, and although this can still be accomplished manually, an automation tool, such as Red Hat, Ansible Automation Platform, Terraform, Vagrant, etc., can do it for you. We are going to automate the first blog using IaC. We'll write a Vagrantfile which will provision us the website. Let's get started!!

Now since we already have a Vagrantfile in `/home/vagrant-vms/centos7/` directory, we are going to copy that file into a new directory and edit it. We'll create a new directory `IaC` in `/home/vagrant-vms` and copy the Vagrantfile there. We'll edit the Vagrantfile and setup all the commands and configurations in it. 


### Vagrantfile Setup
```js
$ cd /vagrant-vms/

$ mkdir Iac

$ cd IaC/

$ vagrant init geerlingguy/centos7
```
