---
title: Practising Linux and Vagrant Skills
date: '2022-07-14T12:00:00.00Z'
description: 'Setting up a website on a VM using Linux & Vagrant'
---


In this blog, I'll talk about how one can use Linux and Vagrant to setup a website on a virtual machine. One does not need to be an expert in Linux or Vagrant to be able to implement this project. Having a basic knowledge in both skill set should be fine. We will be setting up a website on a virtual machine with centos7. Before we do that, we need to install a virtual machine and vagrant on our Linux based system. The rest of the requirements will be mentioned later on in the blog. I assume you already know what vagrant and virtual machine are and how they work but if you don't, here is a really simple explanation of what they are. A Virtual Machine (VM) is a compute resource that uses software instead of a physical computer to run programs and deploy apps. One or more virtual “guest” machines run on a physical “host” machine.  Each virtual machine runs its own operating system and functions separately from the other VMs, even when they are all running on the same host. This means that, for example, a virtual MacOS virtual machine can run on a physical PC. 

<img src="https://raw.githubusercontent.com/Ben74x/devfolio/master/content/blog/Practising%20Linux%20%26%20Vagrant%20Skills/virtual-machine-benefits-1024x536.png"/>

Virtual machine technology is used for many use cases across on-premises and cloud environments. More recently, public cloud services are using virtual machines to provide virtual application resources to multiple users at once, for even more cost efficient and flexible compute. Virtual machines (VMs) allow a business to run an operating system that behaves like a completely separate computer in an app window on a desktop. VMs may be deployed to accommodate different levels of processing power needs, to run software that requires a different operating system, or to test applications in a safe, sandboxed environment. Virtual machines have historically been used for server virtualization, which enables IT teams to consolidate their computing resources and improve efficiency. Additionally, virtual machines can perform specific tasks considered too risky to carry out in a host environment, such as accessing virus-infected data or testing operating systems. Since the virtual machine is separated from the rest of the system, the software inside the virtual machine cannot tamper with the host computer. The virtual machine runs as a process in an application window, similar to any other application, on the operating system of the physical machine. Key files that make up a virtual machine include a log file, NVRAM setting file, virtual disk file and configuration file. The most popular VMs are *VirtualBox* and *VMWare*. In this project, we are going to use *VirtualBox*.

Vagrant is a development environment automation tool built and managed by HashiCorp. It accomplishes this by leveraging virtual machines with VirtualBox, VMWare, or cloud providers like AWS. It’s primarily designed to standardize environments across platforms. However, it’s not limited to that. Vagrant can be especially useful for cross-platform automated tests. It is a tool for building and managing virtual machine environments in a single workflow. With an easy-to-use workflow and focus on automation, Vagrant lowers development environment setup time, increases production parity, and makes the “works on my machine” excuse a relic of the past. Vagrant makes it easy to create reproducible virtualised environments. Machines are provisioned on top of VirtualBox, VMWare, AWS, or any other provider. Vagrant includes support for configuration management tools like Chef or Ansible. Naturally you can use simple shell scripts to automatically install and configure software as well. All of this is defined in a Vagrantfile. The Vagrantfile defines the “box”, VM customizations (like memory and networking settings), and which provisioners to run. The “box” is a base image. This may be a VirtualBox image or an AMI (Amazon Machine Image) on AWS. Essentially, this is where you decide the operating system. Then, you use the various provisioners to set everything up. Once you have everything in the Vagrantfile, you’re ready to go. Now anyone can recreate the same environment with a few short commands.

These features are useful in modern teams. Engineers can define a Vagrantfile that installs all the programming language tools and databases for their work. Then, they can be distribute it amongst them, so that everyone can work in the same environment of their OS. DevOps teams can use Vagrant to spin up multiple VMs running different Linux distributions to test configuration management in different systems. It also makes it easy to create disposable environments to experiment with different technologies. It’s also possible to package up your entire product in a Vagrantfile and give that to your designers or product owners, as a way to experiment with the product. This encapsulation makes Vagrant a useful tool when testing various infrastructure project. Here’s an example. Let’s say that you’re working with a configuration management system like Ansible to install and configure MySQL on different Linux distributions. Vagrant can be used in the test process to spin up VMs for each distribution and run the configuration management.


Okay so I said a simple explanation but I think I ended up going into details :). The project that we are going to do is simply host a website on the VirtualBox using Vagrant. The project is going to be implemented on Ubuntu. Firstly, we need to download VirtualBox and Vagrant and we are going to do that using the bash terminal. 

### Install VirtualBox and Vagrant
Install Virtualbox
```js
$ sudo apt update

$ sudo apt install virtualbox
```

Install Vagrant
```js
$ wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg

$ echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list

$ sudo apt update && sudo apt install vagrant
```





 
