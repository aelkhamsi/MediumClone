
class UserRepository {

    getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM users`;
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
            let sql = `SELECT * FROM users WHERE id = ?`;
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