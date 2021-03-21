const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10;


exports.login = (req, res) => {
  const db = req.db;
  const email = req.body.email;
  const password = req.body.password;

  if (email && password) {
    let sql = `SELECT * FROM users WHERE email = ?`;
    let query = db.query(sql, email, (err, result) => {
      if (err) {
          console.log(err);
          res
            .status(500)
            .json({errorMessage: "Internal server error. Please try another time1"})
      }

      if (result.length != 0) {
        const hash = result[0].password;
        bcrypt.compare(password, hash, function(err, success) {
          if (success) 
          { //Good password
            const user = {
              username: result[0].username,
              email: result[0].email
            }
            jwt.sign(user, "iamthegreatestaliveandiamhumble", function(err, token) { //TODO: create env variable for the secret
              res
                .status(200)
                .json({id: result[0].id, username: user.username, access_token: token})
            })
          }
          else 
          { //Wrong Password
            res
            .status(404)
            .json({errorMessage: "Incorrect Email or Password"})
          }
        });
      } 
      else 
      { //Wrong Email (email doesn't exist)
        res
          .status(404)
          .json({errorMessage: "Incorrect Email or Password"})
      }
    });
  }
  else
  { // Missing fields
    res
      .status(400)
      .json({errorMessage: "Missing fields"})
  }
};


exports.signup = (req, res) => {
  const db = req.db;
  const username = req.body.username;
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const role = req.body.role;


  if (username && email && password && role) 
  {
    let sql = `SELECT * FROM users WHERE email = ?`;
    let query = db.query(sql, email, (err, result) => {
      if (err) {
          console.log(err);
          res
            .status(500)
            .json({errorMessage: "Internal server error. Please try another time1"})
      }
      if (result.length > 0) 
      { // Email already exists
        res
          .status(400)
          .json({errorMessage: "This email is already used"})
      } 
      else 
      { // Existing Email
        bcrypt.hash(password, saltRounds, function(err, hash) {
          let user = {
            username: username, 
            email: email, 
            password: hash, 
            role: role, 
            createdAt: Date.now(), 
            updatedAt: Date.now()
          };
          let sql = `INSERT INTO users SET ?`;
          let query = db.query(sql, user, (err, result) => {
            if (err) {
              res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time2"})
            }
            // Success
            res
              .status(200)
              .json({message: "User added"})

          });
        });
      }
    });
  } 
  else 
  { // Missing Fields
      res
        .status(400)
        .json({errorMessage: "Missing fields"})
  }
};
