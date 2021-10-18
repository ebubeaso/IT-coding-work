#! /bin/bash

# This Bash script is used to convert a .pem root certificate into a .crt certificate to install
# into the Linux system for HTTPS connections
echo "Hello!"
echo "This Bash script is made to convert a .pem root certificate into a .crt certificate"
echo "We will use this to be able to make HTTPS connections that we can trust on our network"
echo "Enter the name of the SSL certificate that you would like to convert"
read -p "-> " CERT
echo
echo "converting.."
openssl x509 -outform der -in $CERT -out ${CERT%.pem}.crt
