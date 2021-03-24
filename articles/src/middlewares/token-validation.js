const http = require('http');
const axios = require('axios');
const env = require('../../environment');
const { resolve } = require('path');
const jwt = require('jsonwebtoken');



exports.verifyToken = (req, res, next) => {
    let tokenBearer = req.header('Authorization');

    if (!tokenBearer) {
        return res.status(401).send('Unauthorized request');
    }

    let token = tokenBearer.split(' ')[1]
    axios.post(env.AUTH_SERVER_URI + '/checkToken', {token: token})
    .then((result) => {
        next();
    })
    .catch((err) => {
        return res.status(401).send('Unauthorized request');
    })

};
