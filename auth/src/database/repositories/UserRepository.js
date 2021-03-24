const User = require('../../models/User');


class UserRepository {


    getByEmail(email) {
        return new Promise(async (resolve, reject) => {
            let users = await User.findAll({
                where: {
                    email: email
                }
            })
            
            if (users.length != 0) 
                resolve(users[0])
            else
                reject(null)
        });
    }

    add(user) {
        return new Promise(async (resolve, reject) => {
            let result = await User.create(user);
            resolve(result);
        });
    }

    
}

module.exports = new UserRepository();
