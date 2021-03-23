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