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

### Config Changes
Run `vi Vagrantfile` and change the configurations to this
```
# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "geerlingguy/centos7"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
   config.vm.network "private_network", ip: "192.168.56.17"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
   config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
  # documentation for more information about their specific syntax and use.
   config.vm.provision "shell", inline: <<-SHELL
     yum install httpd wget unzip -y
     systemctl start httpd
     systemctl enable httpd
     cd /tmp/
     wget https://www.tooplate.com/zip-templates/2129_crispy_kitchen.zip
     unzip -o 2129_crispy_kitchen.zip
     cp -r 2129_crispy_kitchen/* /var/www/html/
     systemctl restart httpd 
   SHELL
end
```



Okay so let's explain what we did in the config. Just like the previous blog, we specified the private ip *192.168.56.17* to access the website. We then set up a bridge network to make the VM appear as another physical device on our network. After that, we put all the commands in the config.vm.provision shell to allow the VM to run it at start time. You can use your own website or you can download a different one on  This sums up the configuration changes. Further changes can be done also if you want to. An example is the amount of memory on the VM. You can unharsh that line to use 1GB of memory. By default, the VM uses 512. 
