const queries = require('../queries/articles-queries');

class ArticleRepository {


    getAll() {
        return new Promise((resolve, reject) => {
            let sql = queries.QUERY_GET_ALL;
            db.query(sql, (err, result) => {
                if (err) 
                    reject(err);
                else
                    resolve(result)
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

    getByUserId(id) {
        return new Promise((resolve, reject) => {
            let sql = queries.QUERY_GET_BY_USER_ID;
            db.query(sql, id, (err, result) => {
                if (err) 
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    add(article) {
        return new Promise((resolve, reject) => {
            let sql = queries.QUERY_ADD_ARTICLE;
            db.query(sql, article, (err, result) => {
                if (err)
                    reject(err);    
                else
                    resolve(result);
            });
        })
    }
}

module.exports = new ArticleRepository();
