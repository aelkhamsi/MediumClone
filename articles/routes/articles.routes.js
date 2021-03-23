
module.exports = (app) => {
    const articlesController = require('../controllers/articles.controller.js');

    //dev
    app.get("/", (req, res) => {
      res.send("<h1> Hello World! </h1>");
    })

    //GET
    app.get("/article", articlesController.getAll)

    app.get("/article/:id", articlesController.getById)

    app.get("/article/user/:id", articlesController.getByUserId)


    //POST
    app.post("/article", articlesController.addArticle);

    //PUT
    //app.put("/article", articlesController.updateArticle);

    //DELETE
    //app.delete("/article", articlesController.deleteArticle);
}
