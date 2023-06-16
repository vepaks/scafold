# Cheat sheet

1. Initialize the project
   * npm init --yes
   * mkdir src
   * cd src
   * touch index.js
   * cd -
2. Setup dev enviroment variables
   * npm i -D nodemon 
   * * in package.json ->   "scripts": {
     "start": "nodemon src/index.js"
     },
3. Install and setup express
   * npm install express
   * add static middleware to express
   * * app.use(express.static('public'))
   * add body parser
   * *  app.use(express.urlencoded({ extended: false }));
   * add routes 
   * * touch routes.js
4. Add static resources
5. Add views with ready html