const queries = require('../queries/comments-queries');

class CommentRepository {

    getAll() {
        return new Promise((resolve, reject) => {
            let sql = queries.QUERY_GET_ALL;
            db.query(sql, (err, result) => {
                if (err) 
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            let sql = queries.QUERY_GET_BY_ID;
            db.query(sql, id, (err, result) => {
                if (err) 
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    getByArticleId(id) {
        return new Promise((resolve, reject) => {
            let sql = queries.QUERY_GET_BY_ARTICLE_ID;
            db.query(sql, id, (err, result) => {
                if (err) 
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    add(comment) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO comments SET ?;`;
            db.query(sql, comment, (err, result) => {
                if (err) 
                    reject(err);          
                else
                    resolve(result);
            });
        })
    }
}

module.exports = new CommentRepository();