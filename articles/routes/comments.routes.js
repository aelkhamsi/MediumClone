
module.exports = (app) => {
    const commentsController = require('../controllers/comments.controller.js');

    // app.get("/comment", commentsController.getAll)

    // app.get("comment/:id", commentsController.getById)

    app.get("/comment/article/:id", commentsController.getByArticleId)

    app.post("/comment", commentsController.addComment);
}
