const Article = require('../models/Article');
const articleRepository = require('../repositories/ArticleRepository');

exports.getAll = (req, res) => {
    articleRepository.getAll()
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time1"})
        })
};


exports.getById = (req, res) => {
    articleRepository.getById(req.params.id)
        .then((result) => {
            if (result.length == 0) 
                res
                    .status(404)
                    .json({errorMessage: "Not Found"})
        
            else
                res
                    .status(200)
                    .json(result)
        })
        .catch((err) => {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time"})
        })  
};

exports.getByUserId = (req, res) => {
    articleRepository.getByUserId(req.params.id)
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time"})
        })
};

exports.addArticle = (req, res) => {
    let userId = req.body.userId;
    let name = req.body.name;
    let content = req.body.content;

    if (userId && name && content) {
        let article = new Article(userId, name, content);
        articleRepository.add(article)
            .then((result) => {
                res
                    .status(200)
                    .json({
                        message: "Article added",
                        id: article.id
                    })
            })
            .catch((err) => {
                res
                    .status(500)
                    .json({errorMessage: "Internal server error. Please try another time"})
            })
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing fields"})
    }
};


