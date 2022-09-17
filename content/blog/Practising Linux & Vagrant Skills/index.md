---
title: Practising Linux and Vagrant Skills
date: '2022-07-14T12:00:00.00Z'
description: 'Setting up a website on a VM using Linux & Vagrant'
---


In this blog, I'll talk about how one can use Linux and Vagrant to setup a website on a virtual machine. One does not need to be an expert in Linux or Vagrant to be able to implement this project. Having a basic knowledge in both skill set should be fine. We will be setting up a website on a virtual machine with centos7. Before we do that, we need to install a virtual machine and vagrant on our Linux based system. The rest of the requirements will be mentioned later on in the blog. I assume you already know what vagrant and virtual machine are and how they work but if you don't, here is a really simple explanation of what they are. A Virtual Machine (VM) is a compute resource that uses software instead of a physical computer to run programs and deploy apps. One or more virtual “guest” machines run on a physical “host” machine.  Each virtual machine runs its own operating system and functions separately from the other VMs, even when they are all running on the same host. This means that, for example, a virtual MacOS virtual machine can run on a physical PC. 

<img src="https://user-images.githubusercontent.com/37503046/178597909-bf1d6f71-7cf6-4eb6-b728-a8a8f9a7975a.jpg"/>

Virtual machine technology is used for many use cases across on-premises and cloud environments. More recently, public cloud services are using virtual machines to provide virtual application resources to multiple users at once, for even more cost efficient and flexible compute. Virtual machines (VMs) allow a business to run an operating system that behaves like a completely separate computer in an app window on a desktop. VMs may be deployed to accommodate different levels of processing power needs, to run software that requires a different operating system, or to test applications in a safe, sandboxed environment. Virtual machines have historically been used for server virtualization, which enables IT teams to consolidate their computing resources and improve efficiency. Additionally, virtual machines can perform specific tasks considered too risky to carry out in a host environment, such as accessing virus-infected data or testing operating systems. Since the virtual machine is separated from the rest of the system, the software inside the virtual machine cannot tamper with the host computer. The virtual machine runs as a process in an application window, similar to any other application, on the operating system of the physical machine. Key files that make up a virtual machine include a log file, NVRAM setting file, virtual disk file and configuration file. The most popular VMs are *VirtualBox* and *VMWare*. In this project, we are going to use *VirtualBox*.


 
