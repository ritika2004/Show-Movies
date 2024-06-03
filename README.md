# Project Name Show-Movies

## Description

This project is a basic Node.js web application with user authentication features, including login, registration, and logout functionalities. 
The application uses Express as the web framework and EJS as the templating engine.
It mainly shows the information of the movie whatever the user search and when the information shows on your screen there is 
also a button add watch later by clicking on that you can add it in your local storage as watch later list.

## Project Structure
project-root/
│
├── controllers/
│ ├── authController.js
│
├── views/
│ ├── index.ejs
│ ├── login.ejs
│ ├── logout.ejs
│ ├── register.ejs
│
├── public/
│ ├── js/
│ ├── main.js
│
├── app.js
├── package.json
└── README.md
## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ritika2004/Show-Movies.git
   cd Show-Movies
npm install
Install backend dependencies:

nodejs

mongodb

There will be server

express
bcrypt
ejs-mate 
axios
body-parser
cookie-parser
dotenv
jsonwebtoken
mongoose
path


Access the application in your browser by live server.
Project Structure
-index.ejs

server
app.js
package.json
package-lock.json

#Technologies Used
Frontend:
HTML,CSS
Javascript
Bootstrap: CSS framework

Backend:

MongoDB
Express js
Node js

Deployment:
Render: Frontend deployment
Contributing
Contributions are welcome! To contribute to this project, follow these steps:


Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feat


DATABASE_URL=mongodb://127.0.0.1:27017/Movies
SESSION_SECRET=lsdifjvldsvmlmvofjbflkmbkfbpd5564sk

npm start
http://localhost:8080
Home Page:

The home page is rendered using index.ejs.
User Registration:

Accessible via /register.
Uses register.ejs for the registration form.
Handles form submission and user creation.
User Login:

Accessible via /login.
Uses login.ejs for the login form.
Handles form submission and user authentication.
User Logout:

Accessible via /logout.
Uses logout.ejs to confirm logout action.
Folders and Files
controllers/authController.js:

Handles authentication-related logic, including login, registration, and logout.
views/:

Contains EJS templates for rendering pages.
index.ejs: Home page template.
login.ejs: Login form template.
logout.ejs: Logout confirmation template.
register.ejs: Registration form template.
public/js

Contains client-side JavaScript code (if any).
app.js:

Main entry point for the application.
Sets up Express server, middleware, routes, and error handling.

## Contribution

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

## Contact

If you have any questions or need further assistance, please contact [ritikaagrawal079@gmail.com].

