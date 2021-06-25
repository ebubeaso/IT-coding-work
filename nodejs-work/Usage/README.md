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

How to set it up:
(This project does require having Python, Node, npm as well as typescript installed on
your machine to try this out.)
- CD into the "database" directory and then run the command 
"docker build --no-cache -t <tag name> --force-rm -f MariaNodeDockerfile ."
This builds out the database container image to use for this program.

- Then, create a container from the Docker image using 
"docker run -dt -p <external port>:3306 --name <give it a name> <image tag name>"
and then enter the container with "docker exec -ti <container name> /bin/sh
Once you are in the container, cd into "/home/usage/Documents" and then run the script
called "setupMariaDB.sh" and follow the instructions from there. Once you are done, 
query the database server doing "mysql -u root < usage.sql" to upload the data to the
database. After that, login to the database as root and create the user 'usageapp'
 along with a password. Be sure to provide the user the necessary GRANT permissions to
access the data on the Usage database.

- Once the database is running, exit out of the container, open up a new shell tab and
then go into the backend directory. Once you are in the "backend" directory, open up
server.js and change the IP address that is there to the IP address that your database
will be running in. Then, save the changes, save your usageapp user's password in the 
environment variable "PI_DB_PASS" and then start the Node backend service.

- After that, open up a new tab and cd into the frontend/src directory and then open up
the file "Graph.tsx" in text editor. From there, find the code where the Fetch API is
being used and change the IP address to the address where the Node backend will reside in
for the project. Once you are done, run the shell script "compileTS.sh" to recompile 
the TypeScript files and save the changes. Once that is complete, run the command
"python3 -m http.server" to run a simple Python web server to serve the frontend.
You could also use a standard web server like Apache or Nginx if you would like, it is
definitely up to you.

If you have issues with setting up this code
