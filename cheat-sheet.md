# Cheat sheet

1. Initialize the project
   * npm init --yes
   * mkdir src
   * cd src
   * touch index.js
   * cd -
2. Setup dev environment variables
   * npm i -D nodemon 
     * in package.json ->   "scripts": {
       "start": "nodemon src/index.js"
       },
3. Install and setup express
   * npm install express
   * add static middleware to express
     * app.use(express.static('public'))
   * add body parser
     *  app.use(express.urlencoded({ extended: false }));
   * add routes 
     * touch routes.js
4. Add static resources
5. Add views with ready html
6. Add express-handlebars view engine
   * npm i express-handlebars
   * add to express and configure extensions
   * config views folder 
   * add main layout
     * cd src/views
     * mkdir layouts
     * touch main.hbs
   * add partial folder 
     * fix static paths
7. Add controllers folder with controller
   * mkdir controllers
     * touch homeController.js
8. Add DB connection
   * npm i mongoose
   * connect to mongoose
9. Authentication
   * add user controller
   * add controllers to routes
   * fix navigation on header
   * render login page
   * render register page
10. Add User model
11. add unique user
12. validate repeating password
13. Add user manager
    * require to userController 
    * add register method
    * validate user exists
14. Fix forms in login and register pages
15. Add login and register post actions
16. Implement user manager interface
17. Hash password
    * npm i bcryptjs