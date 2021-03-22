module.exports = (app) => {
    const usersController = require('../controllers/users.controller.js');

    //dev
    app.get("/", (req, res) => {
      res.send("<h1> Hello World! </h1>");
    })

    app.get("/users/:id", usersController.getById);

    app.get("/users", usersController.getAll);
}
