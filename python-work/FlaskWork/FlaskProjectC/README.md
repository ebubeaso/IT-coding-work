This is another Flask web application where I make a notes app. The sole purpose
of this web application is to continue to practice using Flask as a web
framework as well as strengthen my web development skills. This notes application
takes on the full on CRUD standard when it comes to APIs. I wanted to make an
application that is flexible enough to use while using an API tool like Postman
or Python Requests as well as from the web user interface.

Here is how it works:

Before you can see the notes, or really use this application. You will have to
login. If you try to go to the Notes page of this web app you will receive a
prompt telling you to login, where you will have to login. If you do not have
an account saved in the database (this uses SQLite for practicing purposes),
you will have to signup with a username and a password. Once you sign up, you
can login and then use the notes application. Furthermore, if you login through
an API tool like Python Requests or Postman, you will be given an access token
and refresh token, where you will need to use for security purposes when it 
comes to adding, modifying or deleting notes from the application. You can then
logout when you are all done.

This solution will be implemented in the user interface side of things once I
finish with the application as an additional update and not derail from this
notes application essentially being a form of practice of making APIs and web
applications that I will be able to use with software-defined networking (SDN) 
where I can make web applications that configure and manage a network controller
in an SDN environment, that way I can work to make modern computer networks more
agile and programmable to fit the needs of an entreprise.
