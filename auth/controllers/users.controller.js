

exports.getAll = (req, res) => {
    let sql = `SELECT * FROM users`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
                res
                    .status(500)
                    .json({errorMessage: "Internal server error. Please try another time1"})
        }
        res 
            .status(200)
            .json(result)
    })
}

exports.getById = (req, res) => {
    const id = req.params.id;

    if (id) {
        let sql = `SELECT * FROM users WHERE id = ?`;
        let query = db.query(sql, id, (err, result) => {
            if (err) {
                console.log(err);
                res
                  .status(500)
                  .json({errorMessage: "Internal server error. Please try another time1"})
            }
            else if (result.length == 0) {
                res 
                    .status(404)
                    .json({errorMessage: "User Not Found"})
            }
            else {
                res
                    .status(200)
                    .json(result[0])
            }
        })
    } else {
        res
            .status(400)
            .json({errorMessage: "Missing Fields"})
    }
}