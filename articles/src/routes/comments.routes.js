
module.exports = (app) => {
    const commentsController = require('../controllers/comments.controller.js');

    //GET
    app.get("/comment", commentsController.getAll)

    app.get("/comment/:id", commentsController.getById)

    app.get("/comment/article/:id", commentsController.getByArticleId)

    //POST
    app.post("/comment", commentsController.addComment);
}
