#!/bin/bash

# This script uses getops to remove or disable a user account. You also have the
# option to make a backup of the account if you like

# Check if the user is root
if [[ ${UID} -ne 0 ]]
then
  echo "You need to be sudo or root to run this script" >&2
  exit 1
fi

# make the info function
info() {
  # Tells the user how to use this script
  echo "How to run script: ${0} [DdRB] USER, [USER]....." >&2
  echo "You can specify as many users as you would like"
  echo "Options:" >&2
  echo "  -D : disables the user account" >&2
  echo "  -d : deletes the user account but leaves home directory"
  echo "  -E : erases the account, and deletes the home directory (use with option -d)" >&2
  echo "  -B : makes a backup of the home directory to use" >&2
  echo "Note: You cannot pick options d or E at the same time or the script won't work" >&2
  echo
  exit 1
}

# Checks to see if the exit status of the last command ran well
# I made this a function to follow the Don't Repeat Yourself standard
checkrun() {
  if [[ ${?} -ne 0 ]]
  then
    echo "${1}"
    exit 1
  else
    echo "The command ran successfully!"
    echo
  fi
}
# Make the archive directory
BACKUP_FOLDER='/backup'
# Use getopts
while getopts DdEB OPTIONS
do
  case ${OPTIONS} in
    D) DISABLE_USER='true' ;;
    d) DELETE='true' ;;
    E) ERASE_OPTION='-r' ;;
    B) BACKUP='true' ;;
    ?) info ;;
  esac
done

# Remove the command options
shift $(( OPTIND - 1 ))

# Show info when user does not give any options
if [[ "${#}" -lt 1 ]]
then
  info
fi

# Loop through the users to delete or disable
for USER in "${@}"
do
  echo "Processing ${USER} ...."
  ID_NUMBER=$(id -u ${USER})
  if [[ ID_NUMBER -lt 1000 ]]
  then
    echo "Operation refused: Cannot delete ${USER} because it is a system service account" >&2
    exit 1
  fi

  # We want to check if the user wants a backup of their home directory before deleting
  # or disabling the user so that it does not result in any data loss if the user wants
  # to backup the data
  if [[ "${BACKUP}" == 'true' ]]
  then
    if [[ ! -d "${BACKUP_FOLDER}" ]]
    then
      echo "Making the backup directory"
      mkdir -p ${BACKUP_FOLDER}

      # check if the command ran without errors
      checkrun "Could not make the backup directory" >&2
      echo "Backup directory completed!"
    fi
    # Make the backup file
    BACKUP_FILE="${BACKUP_FOLDER}/${USER}.tar.gz"
    # You must check if the home directory exists for the user account
    if [[ -d "/home/${USER}" ]]
    then
      echo "Making the archive of the home directory"
      tar -zcf ${BACKUP_FILE} /home/$USER &> /dev/null
      # Checks if the last command ran properly
      checkrun "Could not make a backup of the home directory" >&2
    else
      echo "The home directory of ${USER} does not exist" >&2
      exit 1
    fi
  fi
  
  # Check if the user wants to disable the account
  if [[ "${DISABLE_USER}" == 'true' ]]
  then
    echo "Disabling user account"
    echo
    chage -E 0 ${USER}
    checkrun "Could not disable the user account" >&2
    echo "The user is now disabled"
  fi

  # Check if the user wants to delete the account
  if [[ "${DELETE}" == 'true' ]]
  then
    echo "Deleting this user: ${USER}"
    echo
    userdel ${ERASE_OPTION} ${USER}
    checkrun "The user account ${USER} did not delete properly" >&2
    echo "The account ${USER} was deleted successfully"
  fi
done

exit 0
