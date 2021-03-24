const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const userRepository = require('../repositories/UserRepository');


exports.signup = async (req, res) => {
    try {
        const user = req.body;

        if (user.username && user.email && user.password && user.role) {
            userRepository.getByEmail(user.email)
                .then((user) => {
                    res
                        .status(400)
                        .json({errorMessage: "Email already used"})
                })
                .catch((err) => {
                    bcrypt.hash(user.password, saltRounds, async function(err, hash) {
                        user.password = hash;
                        let result = await userRepository.add(user)
                        res
                            .status(200)
                            .json(result)
                    })
                })           
        } else {    
            res
                .status(400)
                .json({errorMessage: "Missing Fields"});
        }
        
    } catch(err) {
        console.log(err);
        res
            .status(500)
            .json({errorMessage: "Internal error in the server"})
    }
}



exports.login = async (req, res) => {
    try {
        const loginData = req.body;

        if (loginData.email && loginData.password) {
            userRepository.getByEmail(loginData.email)
                .then((user) => {
                    user = user.dataValues;
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
                })
                .catch((err) => {
                    res
                        .status(404)
                        .json({errorMessage: "Incorrect email or password"})    
                })
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
              .json({message: "valid"})
          }
        });
    } else {
      res
        .status(401)
        .json({errorMessage: "not valid"})
    }
}