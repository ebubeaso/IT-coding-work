#!/bin/bash

echo "Hello fellow Linux user!! Look at the options below to decide"
echo "Whether or not you would like to update your system, upgrade it or both"
echo "---- Options ----"
echo ""
echo "1. just update my repositories"
echo "2. just upgrade my repositories"
echo "3. do both please"
echo ""
read CHOICE
case $CHOICE in
1)
sudo apt update
echo "Would you also like to upgrade the system? [y/n]"
read OPTION
if [[ $OPTION == 'y' ]]; then
	echo "Okay, upgrading your system.."
	sleep 2
	sudo apt dist-upgrade
else
	"Okay sounds good, farewell!"
fi
;;
2)
sudo apt dist-upgrade
;;
3)
echo "Okay, I will do both, please wait.."
sleep 2.5
sudo apt update && sudo apt dist-upgrade
;;
esac
