const fs = require('fs');
const path = require('path');
const queries = require('../queries/articles-queries');
let Article = require('../models/Article.js');



exports.getAll = (req, res) => {
    let sql = queries.QUERY_GET_ALL;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time1"})
        }
        res
            .status(200)
            .json(result)
    });
};

exports.getById = (req, res) => {
    let sql = queries.QUERY_GET_BY_ID;
    db.query(sql, parseInt(req.params.id), (err, result) => {
        if (err) {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time"})
            throw err;
        }
        else if (result.length == 0) 
            res
                .status(404)
                .json({errorMessage: "Not Found"})
        
        else
            res
                .status(200)
                .json(result)
    });
};

exports.getByUserId = (req, res) => {
    let sql = queries.QUERY_GET_BY_USER_ID;
    db.query(sql, parseInt(req.params.id), (err, result) => {
        if (err) {
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time"})
            throw err;
        }
        res
            .status(200)
            .json(result)
    });
};

exports.addArticle = (req, res) => {
    let userId = req.body.userId;
    let name = req.body.name;
    let content = req.body.content;

    if (userId && name && content) {
        let article = new Article(userId, name, content);
        let sql = queries.QUERY_ADD_ARTICLE;
        db.query(sql, article, (err, result) => {
            if (err) {
                console.log(err);
                res
                    .status(500)
                    .json({errorMessage: "Internal server error. Please try another time"})
            }
                
            else
                res
                    .status(200)
                    .json({
                        message: "Article added",
                        id: article.id
                    })
        });
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing fields"})
    }
};


