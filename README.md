# **How the app was built...**

## Registration phase

<hr>

1. The login and register pages were first built in frontend (React)
2. The register page submits the form to /api/users/register by making a POST request to the backend server(through axios as form submissions in react work differently due to usage of useState hooks and preventDefault causes changes in behaviour)
3. While the POST request is made to the server, in the backend, first, it is checked if username received from the form is already present in the database.
4. If the username is already present in the database, a JSON is sent back with a message saying the username is taken. Else, a JSON with message saying username is available is sent and the form data is saved to the database.
5. So now, in the frontend when the post request is made through axios, a .then() is tacked on to obtain the JSON with the message sent by the server.
6. Now if registration is unsuccessful, i.e if the JSON message sent by the server is "username already taken", a helper message is conditionally rendered and for this, a useState hook is used.
7. If registration is successful, the user is redirected to the login page.

## The user mongoose model

<hr>
The mongoose model User consists of:
    
- **firstName**
- **lastName**
- **username**
- **password(hashed)**
- **batch**
- **department**
- **about**

_These above fields are required and hence are fulfilled during registration_

- **comments** which is an object by itself that has:
  - **by**
  - **answers** which is the object that holds the answers to the 3 questions in slambook page of a user everytime someone fills the form:
    - **answer1**
    - **answer2**
    - **answer3**

_These fields are kept not required and are given a default value of an empty string("") because while registering, the data cannot be stored to database if it were set to required_
