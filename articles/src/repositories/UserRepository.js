const queries = require('../queries/users-queries');

class UserRepository {

    getAll() {
        return new Promise((resolve, reject) => {
            let sql = queries.QUERY_GET_ALL;;
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
}

module.exports = new UserRepository();