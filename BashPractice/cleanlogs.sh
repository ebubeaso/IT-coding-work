#! /bin/bash

LOGLIST=(auth.log syslog dmesg dmesg.0 dmesg.1.gz dmesg.2.gz dmesg.3.gz
dpkg.log kern.log lastlog hibernate.log wtmp boot.log)

echo "Clearing up log files..."
for i in ${LOGLIST[@]}; do
	sudo truncate -s 0 /var/log/$i
done
echo "Log files are cleared!"
