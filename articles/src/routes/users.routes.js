module.exports = (app) => {
    const usersController = require('../controllers/users.controller.js');

    //dev
    app.get("/", (req, res) => {
      res.send("<h1> Hello World! </h1>");
    })

    app.get("/user/:id", usersController.getById);

    app.get("/user", usersController.getAll);
}
