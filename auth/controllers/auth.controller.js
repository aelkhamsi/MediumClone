const bcrypt = require('bcrypt')
const saltRounds = 10;


exports.login = (req, res) => {
  res.send("<h1> Login </h1>")
};


exports.signup = (req, res) => {
  const db = req.db;
  const username = req.body.username;
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const role = req.body.role;


  if (username && email && password && role) {
    let sql = `SELECT * FROM users WHERE email = ?`;
    let query = db.query(sql, email, (err, result) => {
      if (err) {
          console.log(err);
          res
            .status(500)
            .json({errorMessage: "Internal server error. Please try another time1"})
      }
      if (result.length > 0) 
      { //email already exists
        res
          .status(400)
          .json({errorMessage: "This email is already used"})
      } 
      else 
      { 
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
            res
              .status(200)
              .json({message: "User added"})

          });
        });
      }
    });
  } else {
      res
        .status(400)
        .json({errorMessage: "Missing fields"})
  }
};
