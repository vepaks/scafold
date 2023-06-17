# Cheat sheet for Linux user 

1. Initialize the project
   * `npm init --yes`
   * `mkdir src`
   * `cd src`
   * `touch index.js`
   * `cd -`
2. Setup dev environment variables
   * `npm install -D nodemon `
     * in package.json ->   `"scripts": {
       "start": "nodemon src/index.js"
       },`
3. Install and setup express
   * `npm install express`
   * add static middleware to express
     * `app.use(express.static('public'))`
   * add body parser
     *  `app.use(express.urlencoded({ extended: false }));`
   * add routes 
     * `touch routes.js`
4. Add static resources
5. Add views with ready html
6. Add express-handlebars view engine
   * `npm install express-handlebars`
   * add to express and configure extensions
   * config views folder 
   * add main layout
     * `cd src/views`
     * `mkdir layouts`
     * `touch main.hbs`
   * add partial folder 
     * fix static paths
7. Add controllers folder with controller
   * `mkdir controllers`
     * `touch homeController.js`
8. Add DB connection
   * `npm install mongoose`
   * connect to mongoose
9. Authentication
   * add user controller
   * add controllers to routes
   * fix navigation on header
   * render login page
   * render register page
10. Add User model
    * add unique user 
    * validate repeating password
11. Add user manager
    * require to userController 
    * add register method
    * validate user exists
12. Fix forms in login and register pages
13. Add login and register post actions
14. Implement user manager interface
15. Hash password
    * `npm install bcryptjs`
    * hash password
16. Login user
    * find user by username
    * check password is correct
17. Generate jwt token
    * `npm install jsonwebtoken`
    * promisify jsonwebtoken 
      * `mkdir lib`
      * create secret in config directory
        * `mkdir config` 
        * `touch config.js`
      * generate token in manager.login
18. Return token in cookie
    * `npm install cookie-parser`
    * config cookie-parser in index.js
    * set cookie with token 
19. Setup user logout method
20. Authentication middleware
    * `mkdir middlewares`
    * `touch authMiddleware.js`
    * add auth middleware
    * implement authentication
    * attach decoded token to request
    * handle invalid token response
21. Authorization middleware
22. Dynamic navigation
    * add conditional in main.hbs
    * add to res locals
23. Error handler
    * add /404 page
    * redirect missing routes to 404 in homeController
    * add global error handler
    * /middlewares  `touch errorMiddleware.js`
    * add error helpers
        * /src `mkdir utils`
        * /src/utils `touch errorHelpers.js`
24. Show error notifications
    * add error container to main layout
    * add global error handler
    * add local error handler
25. Automatically login after register 