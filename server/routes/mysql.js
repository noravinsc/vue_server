var express = require('express');
var mysql  = require('mysql');
const url = require('url');
var router = express.Router();

var connectionConfig={
	host     : 'localhost',       
	user     : 'root',              
	password : '123456',       
	port: '3306',                   
	database: 'test',
}

router.get('/getMysqlData', function (req, res, next) {
	
	var connection = mysql.createConnection(connectionConfig);
	connection.connect();
	
	var  sql = 'SELECT * FROM websites';
	//查
	connection.query(sql,function (err, result) {
	        if(err){
	          console.log('[SELECT ERROR] - ',err.message);
	          return;
	        }
	 	
	 	   console.log('config:',connection.config)
	       console.log('--------------------------SELECT----------------------------');
	       console.log(result);
	       res.send(result);
	       console.log('------------------------------------------------------------\n\n');  
	});
	connection.end();
});

module.exports = router;
