const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.signup = async (req, res) => {
    try {
        const user = req.body;

        if (user.username && user.email && user.password && user.role) {
            //Check that user.email is unique
            let users = await User.findAll({
                where: {
                    email: user.email
                }
            })
            
            if (users.length != 0) {
                res
                    .status(400)
                    .json({errorMessage: "Email already used"})    
            } else {
                //Create the user
                bcrypt.hash(user.password, saltRounds, async function(err, hash) {
                    user.password = hash;
                    let result = await User.create(user);
                    res
                        .status(200)
                        .json(result)
                })
            }            
        } else {    
            res
                .status(400)
                .json({errorMessage: "Missing Fields"});
        }
        
    } catch(err) {
        res
            .status(500)
            .json({errorMessage: "Internal error in the server"})
    }
}

exports.login = async (req, res) => {
    try {
        const loginData = req.body;

        if (loginData.email && loginData.password) {
            let users = await User.findAll({
                where: {
                    email: loginData.email
                }
            })
            if (users.length == 0) { //Non-existing Email
                res
                    .status(404)
                    .json({errorMessage: "Incorrect email or password"})    
            } else {
                let user = users[0].dataValues;
                bcrypt.compare(loginData.password, user.password, function(err, success) {
                    if (success) { //Good Password
                        let token = jwt.sign(user, 'iamthegreatestaliveandiamhumble', { expiresIn: '1h' });
                        res
                            .status(200)
                            .json({user: user, access_token: token})
                    } else { //Wrong Password
                        res
                            .status(400)
                            .json({errorMessage: "Incorrect email or password"});
                    }
                })
            }
        } else { //Mising Fields
            res
                .status(400)
                .json({errorMessage: "Missing fields"});
        }            
    } catch(err) {
        console.log(err);
        res
            .status(500)
            .json({errorMessage: "Internal error in the server"})
    }
}

exports.checkToken = (req, res) => {
    const token = req.body.token;
    if (token) {
      jwt.verify(token, "iamthegreatestaliveandiamhumble", function(err, decoded) { // TODO: create env variable for the secret
          if (err || decoded == undefined) {
            res
              .status(401)
              .json({errorMessage: "The token is not valid"})
          } else {
            res
              .status(200)
              .json({message: "The token is valid"})
          }
        });
    } else {
      res
        .status(401)
        .json({errorMessage: "The token is not provided"})
    }
}