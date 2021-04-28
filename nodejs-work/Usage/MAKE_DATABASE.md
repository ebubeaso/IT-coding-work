To make the database container, follow the steps below:

1. -> cd database/
2. "docker build --no-cache -t (image name) --force-rm -f MariaNodeDockerfile ."
3. Make a Docker container running "docker run -dt --name (container name) (image name)"
4. Enter in "docker exec -ti (container name) /bin/sh"
5. Once in the container, do "cd /home/usage/Documents" and run "./setupMariaDB"
6. After finishing that, access MariaDB by typing in "mysql -u root -p"
7. In MariaDB, enter in these commands:
	- create database DeviceUsage;
	- create user 'usageapp' identified by 'PASSWORD'; -> (PASSWORD is up to you to make)
	- grant select on DeviceUsage.* to 'usageapp'@'%';
	- FLUSH PRIVILEGES;

8. Exit by entering in "exit". Next, do "mysql -u root -p DeviceUsage < usage.sql" to import the backed up database
9. Run "rc-service mariadb stop" to close out the database service
10. Exit the container, and type in "docker stop (container name) && docker commit (container name) (image name)"
11. Type in "docker rm (container name)"

And you will be good to go! To set up the database again for the application, you would
do "docker run -dt -p 33606:3306 --name (container name) (image name)" and then run
"docker exec -ti (container name) /bin/sh" to enter into the container. Be sure to turn
on the MariaDB service by typing in "rc-service mariadb start" and you can then exit the
container as it runs in the background.
