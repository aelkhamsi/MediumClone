const fs = require('fs');
const path = require('path');
const queries = require('../queries/articles-queries');
let ArticleModel = require('../models/article.js');
let Article = ArticleModel.Article;

//Mock Data
// let articles = [];
// articles.push(new Article(1, "Article 1", "Lorem Ipsum 1"));
// articles.push(new Article(2, "Article 2", "Lorem Ipsum 2"));
// articles.push(new Article(3, "Article 3", "Lorem Ipsum 3"));


exports.getAll = (req, res) => {
    //let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/getAll.sql'), 'utf8');
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
    //let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/getById.sql'), 'utf8');
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
    //let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/getByUserId.sql'), 'utf8');
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
        //let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/addArticle.sql'), 'utf8');
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

// exports.updateArticle = (req, res) => {
//     let id = req.body.id;
//     let name = req.body.name;
//     let content = req.body.content;

//     //let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/getById.sql'), 'utf8');
//     db.query(sql, id, (err, result) => {
//         if (err) {
//             res
//                 .status(500)
//                 .json({errorMessage: "Internal server error. Please try another time"})
//             throw err;
//         } else if (result.length == 0) {
//             res
//                 .status(404)
//                 .json({errorMessage: "Not Found"})
        
//         } else if (id && name && content) {
//             //let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/updateArticle.sql'), 'utf8');
//             let sql = `UPDATE articles SET name = "${name}", content = "${content}" WHERE id = ${id};`
//             db.query(sql, (err, result) => {
//                 if (err) {
//                     res
//                         .status(500)
//                         .json({errorMessage: "Internal server error. Please try another time"})
//                     throw err;
//                 }
                    
//                 else 
//                     res
//                         .status(200)
//                         .json({message: "Article updated"})
//             });
//         } else {
//             res
//                 .status(400)
//                 .json({message: "Missing fields"})
//         }
//     });

// };

// exports.deleteArticle = (req, res) => {
//     let id = req.body.id;

//     let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/getById.sql'), 'utf8');
//     db.query(sql, id, (err, result) => {
//         if (err) {
//             res
//                 .status(500)
//                 .json({errorMessage: "Internal server error. Please try another time"})
//             throw err;
//         } else if (result.length == 0) {
//             res
//                 .status(404)
//                 .json({errorMessage: "Not Found"})
//         } else if (id) {
//             let sql = fs.readFileSync(path.resolve(__dirname, '../queries/articles/deleteArticle.sql'), 'utf8');
//             db.query(sql, id, (err, result) => {
//                 if (err) {
//                     res
//                         .status(500)
//                         .json({errorMessage: "Internal server error. Please try another time"})
//                     throw err;
//                 }
//                 else
//                     res
//                         .status(200)
//                         .json({message: "Article deleted"})   
//             });
//         } 
//         else 
//             res
//                 .status(400)
//                 .json({message: "Missing fields"})  
//     })
// };

