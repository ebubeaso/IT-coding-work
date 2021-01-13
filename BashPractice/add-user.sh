#! /bin/bash

# This bash script is made to automate the process of adding in a user to the Linux system.

# First, check to see if the user id, or UID is 0, for root
if [[ ${UID} -ne 0 ]]
then
  echo "You need to run this as root or sudo" >&2
  exit 1
fi

echo "What is the username that you would like to pass in?"
read -p "-> " USERNAME
echo
echo "What is the full name of this user?"
read -p "-> " FULLNAME
echo
echo "Adding user..."
sleep 2
useradd -c "$FULLNAME" -m $USERNAME -s /bin/bash
# Check if this was run properly
if [[ "$?" -ne 0 ]]
then
  echo "The user account could not be made at this time" >&2
  exit 1
fi
echo "setting up password..."
PASSWORD=$(date +%s%N | sha512sum | head -c 12)
echo
echo "$USERNAME:$PASSWORD" | chpasswd
# Check if the password was added successfully
if [[ "$?" -ne 0 ]]
then
  echo "Could not make the password at this time" >&2
  exit 1
fi
passwd -e $USERNAME
echo
echo "Password all set!"
echo
echo "All done!"
echo "username: ${USERNAME}, password: ${PASSWORD}"
