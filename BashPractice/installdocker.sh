#! /bin/bash

#set up the repo
sudo apt-get --no-install-recommends install apt-transport-https ca-certificates \
curl gnupg-agent software-properties-common -y

#Get the Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#install Docker (forreal this time!)
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

sudo usermod -aG docker $USER
