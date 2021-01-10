#! /bin/bash

echo "pick a number:"
read NUMBER
if [ $NUMBER -gt 10 ] && [ $NUMBER -lt 100 ]
then
	echo "You picked a double digit number, nice."
elif [[ $NUMBER -gt 100 ]]
then
	echo "Dang my dude you picked a big ass number."
else
	echo "You picked a small number chump"
fi
