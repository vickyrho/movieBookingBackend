var connection = require('../config');

module.exports.register=function(req,res) {
    var today = new Date();
    console.log(req.body);
    var users = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "created_at": today,
        "updated_at": today
    };
  //  console.log("hellooooooooooooooooo"+users);
    connection.query('INSERT INTO USERS SET ?', users, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'+error
            })
        } else {
            res.json({
                status: true,
                data: results,
                message: 'user registered sucessfully'
            })
        }
    })
};