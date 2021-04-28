#! /bin/bash

# This bash script automate the process of compiling my Typescript code for
# this project

# remove the existing JS files
rm index.js graph.js main.js Graph.js header.js

# compile the TypeScript code
tsc index.tsx --jsx react-jsx --target esnext \
--allowSyntheticDefaultImports true --moduleResolution node

# also make the browserify bundle
echo "TypeScript compilation complete."
echo " Would you like to bundle all the JS content with Browserify?"
echo
read -p "Type in yes or no: " RESPONSE
echo
if [ $RESPONSE == "yes" ]
then
    browserify index.js -o main.js && browserify Graph.js -o graph.js
elif [ $RESPONSE == "no" ]
then
    echo "Sounds good, have a good day!"
fi
