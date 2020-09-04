#! /bin/bash

for item in $(ls /home/ebube | sort); do
	if [ -d $item ]
	then
		echo $item is a directory
	fi

	if [ -f $item ]
	then
		echo $item is a file
	fi
done
