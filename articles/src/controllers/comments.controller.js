const fs = require('fs');
const path = require('path');
const queries = require('../queries/comments-queries');
let Comment = require('../models/Comment.js');

// exports.getAll = (req, res) => {

// }

// exports.getById = (req, res) => {

// }

exports.getByArticleId = (req, res) => {
    //let sql = fs.readFileSync(path.resolve(__dirname, '../queries/comments/getByArticleId.sql'), 'utf8');
    let sql = queries.QUERY_GET_BY_ARTICLE_ID;
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
}

exports.addComment = (req, res) => {
    
    if (req.body.userId && req.body.articleId && req.body.comment) {
        let comment = new Comment(req.body.userId, req.body.articleId, req.body.comment);
        let sql = `INSERT INTO comments SET ?;`;

        db.query(sql, comment, (err, result) => {
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
                        message: "Comment added"
                    })
        });
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing fields"})
    }
}