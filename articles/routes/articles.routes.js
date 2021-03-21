module.exports = (app) => {
    const articlesController = require('../controllers/articles.controller.js');

    //dev
    app.get("/", (req, res) => {
      res.send("<h1> Hello World! </h1>");
    })

    app.get("/article", articlesController.getAll)

    app.get("/article/:id", articlesController.getById)

    app.post("/article", articlesController.addArticle);

    app.put("/article", articlesController.updateArticle);

    app.delete("/article", articlesController.deleteArticle);
}
