const fs = require('fs');
const path = require('path');

// exports.getAll = (req, res) => {

// }

// exports.getById = (req, res) => {

// }

exports.getByArticleId = (req, res) => {
    let sql = fs.readFileSync(path.resolve(__dirname, '../queries/comments/getByArticleId.sql'), 'utf8');
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
    let userId = req.body.userId;
    let articleId = req.body.articleId;
    let comment = req.body.comment;
    
    if (userId && articleId && comment) {
        let sql = `INSERT INTO comments SET ?;`;
        db.query(sql, {userId, articleId, comment}, (err, result) => {
            if (err) 
                res
                    .status(500)
                    .json({errorMessage: "Internal server error. Please try another time"})
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