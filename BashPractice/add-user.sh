#! /bin/bash

# This script is made as a way to automate the process of adding a user
# to the system. This is based off of a Udemy course on Shell scripting

if [[ ${UID} -ne 0 ]]
then
	echo "You need to be root or use sudo to run this script."
	exit 1
fi

# make the username
echo "Make a username for this new user:"
read -p "==> " USERNAME
echo
# give the account name
echo "What is the name of the person using this account? "
read -p "==> " FULLNAME
echo
# make the password for the acocunt
echo "What will be their initial setup password?"
read -p "==> " PASSWORD
echo
# create the user:
useradd -c "${FULLNAME}" -m ${USERNAME} -s /bin/bash

if [[ "${?}" -ne 0 ]]
then
	echo "Error: User could not be made, try again"
	exit 1
fi
# assign the password to the new user
echo "${USERNAME}:${PASSWORD}" | chpasswd

if [[ "${?}" -ne 0 ]]
then
        echo "Error: Password was not set, try again"
        exit 1
fi
# make their account expire after a period of time
chage -E 2020-11-24 ${USERNAME}
# force them to change their password
passwd -e ${USERNAME}
# display results
echo
echo "Here are the results:"
echo
echo "Username: ${USERNAME}"
echo
echo "Full name: ${FULLNAME}"
echo
echo "Password: ${PASSWORD}"
echo
echo "This account expires in November 24, 2020"
