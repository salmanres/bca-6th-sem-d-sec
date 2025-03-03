const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('hello everyone');
});

routes.get('/login', (req, res) => {
    res.status(202).send('login successful');
})

module.exports = routes;