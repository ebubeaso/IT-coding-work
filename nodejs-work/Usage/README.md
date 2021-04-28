<<<<<<< HEAD
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
=======
This is a simple web application that I made that uses React, D3 and TypeScript as the
front end and Node.js as a backend. The backend connects to a MariaDB database to pull
in data on Xbox usage and phone usage which will then send to the frontend to render
it on a line graph. The frontend will display the data from the two separate data tables
into one line graph that shows the number of hours a user used an Xbox over the week and
another line graph to show how many hours a user used their phone over the week. This is
arbitrary data and is not actual data pulled from a statistic, as I made this simply for
testing purposes of having my project pull data from a database and showing it on the 
web page.

This will come with a MariaDB Dockerfile to build out the MariaDB Docker image for you.
The backend Node application relies on a standard user named "usageapp", and you will
need to make a user with this username, unless you make a different user on the MariaDB
image or container. You do need to save the password under the environment variable name
"PI_DB_PASS", unless you decide to change it on the backend. You are also free to change
the type of data that the backend pulls from the database.

I liked being able to use TypeScript in place of regular JavaScript code, as the strong
typing has helped me write better code, and to catch more errors that would have been
missed otherwise. I also used Browserify to put together all the modules that I have used
as well. Using React as a frontend is really great, using functional components to make 
a UI that is simple yet well organized. Using D3 to make the line graphs was great, as 
I plan on using that visualization library more to make more data visualizations pulled from 
data on infrastructure in future projects of mine. I will build out the Dockerfile after
testing the build in Jenkins and adding it to this repository once I am finished.
>>>>>>> f450b140d6e3ce902aef22176818799d319e50c2
