#! /bin/bash

#this script was made to rename the photos that I have downloaded
#from my OneDrive onto here. They were long iOS image names so I decided
#to rename them to something simpler for the sake of the web project.
#This is another way for me to automate tasks using code
for i in $(ls images); do
	echo "what would you like to rename image $i to?"
	read NAME
	mv images/$i images/$NAME
done
echo "here are the results!"
sleep 1.5
ls images
