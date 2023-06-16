const routes = require('express').Router();

// TODO add controller routes

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = routes;