var express = require('express');
const url = require('url');
var router = express.Router();

var user = {
  name: 'minte_liu',
  age: '25'
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserName', function (req, res, next) {
	console.log('15req.domain:',req.domain)
	console.log('16req.url:',req.url)
	var get_data=req.url
	var end_data=url.parse(get_data,true).query
	console.log("name:",end_data.name)
	// console.log('17res:',res)
	// console.log('18next:',next)
	console.log('19finish')
	if(end_data.name=='minteliu'){
		res.send(user.name);
		user.name='minteliu'
	}

	if(end_data.name=='minte_liu'){
		res.send(user.name);
		user.name='minte_liu'
	}
  	
});

router.get('/getUserAge', function (req, res, next) {
	console.log('24req.domain:',req.domain)
	console.log('25req.url:',req.url)
	// console.log('26res:',res)
	// console.log('27next:',next)
	var get_data=req.url
	var end_data=url.parse(get_data,true).query
	console.log('28finish')
	if(end_data.age=='18'){
		res.send(user.age);
		user.age='18'
	}

	if(end_data.age=='25'){
		res.send(user.age);
		user.age='25'
	}
  	
});

module.exports = router;
