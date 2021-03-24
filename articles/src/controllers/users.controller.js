const User = require('../models/User');
const userRepository  = require('../repositories/UserRepository');

exports.getAll = (req, res) => {
    userRepository.getAll()
        .then((result) => {
            res 
                .status(200)
                .json(result)
        })
        .catch((err) => {
            console.log(err);
            res
                .status(500)
                .json({errorMessage: "Internal server error. Please try another time1"})
        })
}

exports.getById = (req, res) => {
    const id = req.params.id;

    if (id) {
        let sql = `SELECT * FROM users WHERE id = ?`;
        let query = db.query(sql, id, (err, result) => {
            if (err) 
                res
                  .status(500)
                  .json({errorMessage: "Internal server error. Please try another time1"})
            else if (result.length == 0)
                res 
                    .status(404)
                    .json({errorMessage: "User Not Found"})
            else
                res
                    .status(200)
                    .json(result[0])
        })
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing Fields"})
    }
}