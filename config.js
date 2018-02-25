var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'$Vicky8056',
    database:'users'
});

connection.connect(function(err){
    if(!err){
        console.log("database ready");
    }
    else
    {
        console.log("Error while conntecting to DB  "+err);
    }
});

module.exports = connection ;

