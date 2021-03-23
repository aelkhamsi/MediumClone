
module.exports = (app) => {
    const authController = require('../controllers/auth.controller.js');

  
    //dev
    app.get("/", (req, res) => {
      res.send("<h1> Hello World! </h1>");
    })

    app.post("/login", authController.login);

    app.post("/signup", authController.signup);

    //app.post("/checkToken", authController.checkToken);
}
