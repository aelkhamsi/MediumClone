
module.exports = (app) => {
    const articlesController = require('../controllers/articles.controller.js');

    //GET
    app.get("/article", articlesController.getAll)

    app.get("/article/:id", articlesController.getById)

    app.get("/article/user/:id", articlesController.getByUserId)

    //POST
    app.post("/article", articlesController.addArticle);

}
