#! /bin/bash

#This script will essentially compare two strings to see if they are equal

echo "Enter the first string"
read STR1
echo "Enter the second string"
read STR2

if [ $STR1 = $STR2 ]
then
	echo "The two strings are equal"
else
	echo "The strings are NOT equal"
fi
