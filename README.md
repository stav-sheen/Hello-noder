# Hello-noder app

Hello-noder is a node js app to greet the world whenever accessed.
The app comes with a full CI/D pipeline for the many developers out there,
looking to greet the world a little better each day.
The app is written in nodejs.
and its infrastructure was developed using tools: 
Docker,Jenkins,Ansible..
servers built using AWS ec2 rhel8 instances.

## Prerequisits
in order to have your app up and running one must have 2 servers.
1.jenkins server: 
- must have working jenkins software installed with all plugins for Ansible/Docker.
- Docker-ce installed.
- Ansible 
- both Jenkins and Ansible users have sudo permissions.
2. app server:
- Docker-ce.
- Python3 installed (for Ansible.).
- open ssh login for ec2-user of the jenkins server  

## Docker
Docker builds an image which already contains the running app. 
Meaning : 
- uses node base image 
- copies app files to it. 
- installs node dependencies. 
- exposes port 3000 for use
- finally, the image starts with CMD ["npm","start "]
I.E - when the container is run the app is already on it and ready to go :)
image repo in docker dockerhub:
https://hub.docker.com/repository/docker/stavsheen/hellonoder

## Ansible
contains 2 files: 
hosts - the inventory file under which lies the hellonoderapp inv. app server IP
ec2-playbook - uses 3 main modules : 
PIP - to make sure Python can run stuff 
DOCKER_CONTAINER- to manage containers (stops old running app container and starts new one)
DOCKER_IMAGE- manages images (pulls new image built by pipeline from dockerhub)

## Pipeline - how it works
1. Checkout SCM - Clones THIS repository from git.
2. builds docker image from dockerfile in this repository.
3. tests the image built using the docker.inside() command with the apps own unit test.
4. pushes the newly made and healthy docker image to dockerhub repository.
5. deploys Ansible PB on the app server. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Tikal] CI/D project for the DevOps team applicant 
