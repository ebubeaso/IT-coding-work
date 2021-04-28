This is a simple web application where it pulls data from a MariaDB database and 
renders it to a graph in MariaDB. It uses Node.js as the backend app server and the
frontend was made using React, TypeScript for strong typing and D3 for data visualization.
There are two pages, one which will show Xbox usage and another that shows phone usage over
the course of one week.This data was just fabricated by me for testing purposes, but 
you can definitely change it in the backend database. This project will also include 
the Dockerfile needed to provision the MariaDB database, where it will follow the 
MySQL secure installation process, add in the database, as well as the two data tables
on Xbox usage and Phone usage. The standard user is named "usageapp", the database user 
for this simple web app, but you are free to change it in the database if you like. 
However, you will need to set up a user with that standard username, along with a 
password, for the backend part of the app to use. You would then store that password 
as an environment file for the Node.js backend to use on your local machine.

The purpose of this project of mine was to get more comfortable with frontend coding with
React and TypeScript. TypeScript is nice with its strong typing and it is helping me write
better code for my projects. In addition, using D3 for data visualization will help me
a lot with future projects where I plan on making a reporting tool web application for
my infrastructure. 
