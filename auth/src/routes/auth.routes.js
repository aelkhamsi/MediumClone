
module.exports = (app) => {
    const authController = require('../controllers/auth.controller.js');

    app.post("/login", authController.login);

    app.post("/signup", authController.signup);

    app.post("/checkToken", authController.checkToken);
}
