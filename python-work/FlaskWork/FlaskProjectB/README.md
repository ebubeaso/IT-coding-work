This is a web application that I decided to make using Flask. I made it as a
way to get better at understanding APIs and how they can be used to manage data
on users in an imaginary company (I still have yet to think of the enterprise
name!). It uses SQLAlchemy except for the User class which uses the sqlite3
module for making the queries just so that I can be comfortable with using that
in Python scripts

Using the web user interface:
This Flask web application does come with a user interface which uses web pages
that Flask is able to render. With the web interface, a user can login, register,
logout or look at the table of employees (they will have to be logged in first
to see the data). This uses the tables Entreprise.db for the employee data and
UserData.db for the user credentials for who is registered.

Login:
Go to the login page and simply type in your username and password

Register: 
Type in the username and password you will like to use. If the username that
you have chosen is not already in the database, then it will save the account
in the UserData.db SQLite database, that way you can login

Using API app via Postman or Python Requests:
You can mainly use this web application to make API requests, like GET, POST,
PATCH, PUT or DELETE using Postman or Python Requests to get or manage the
data on the database in the backend. However, you will have to be the admin to
use this app via Postman or Python Requests since the API endpoints will 
require to have an access token and a refresh token to refresh your token after
it has expired.

Login as admin:
Either login via the web UI using username 'ebubeaso' and password 'Pierre2020!'
to gain access to the access token and the refresh token or through Postman
or Python Requests by simply sending a POST request with the same login
credentials used to login as the admin in the web UI to the /login endpoint.
Once you do that, you can make requests using the access token, just add it
to the Authorization header and prefix the access token with 'Bearer '. If the
token expires, use the refresh token to make an API request to the /newtoken
endpoint to receive a new token and to continue making requests to the database.

I will continue to be working on this application to add some more functionality
and even a way for the admin to make API requests from the web UI as a secondary
option of managing the data on the Entreprises database. 

Once again I have made this application to better understand APIs and working
with databases using programming so I hope that this readme is helpful. You are
free to download this and make changes if you like, but I really liked making
this project during my free time.
