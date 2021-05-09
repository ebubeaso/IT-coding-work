#! /bin/sh

#I made a Shell script to help automate the database setup process, as the Dockerfile
# could not build out this part of the process. Just run this executable script and you
# will be good to go!

openrc default && /etc/init.d/mariadb setup; rc-service mariadb stop; \
rc-service mariadb start

echo
echo "All set! Run 'mysql_secure_installation' to finish the setup"
echo "and then login using mysql -u root to finish up the next steps in MAKE_DATABASE.md"
