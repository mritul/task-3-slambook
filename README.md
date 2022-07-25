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
