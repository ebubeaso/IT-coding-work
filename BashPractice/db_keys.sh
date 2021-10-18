#! /bin/bash

# making some encryption keys to encrypt the data on a database
# The documentation can be found here:
# Docs --> https://mariadb.com/kb/en/file-key-management-encryption-plugin/
echo "Making the database encryption key file, using AES-256..."
sleep 3
openssl rand -hex 32 > mariadb_keyfile
echo "The key has been made!"
ls mariadb_keyfile
sleep 1
echo
echo "Making the key to encrypt the key file that was made..."
sleep 3
openssl rand -hex 128 > db_keyfile.key
echo "Making the encryption key is now complete!"
ls db_keyfile.key
echo
sleep 1
echo "Encrypting the database key file with the encryption key..."
sleep 3
openssl enc -aes-256-cbc -md sha1 -pass file:db_keyfile.key -pbkdf2 -in mariadb_keyfile -out mariadb_keyfile.enc
echo "Encryption is now complete! Add these to your DB server and you're good to go!"