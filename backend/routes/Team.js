var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
const teamMember = 'https://jsonplaceholder.typicode.com/users'


router.get('/', function(req, res, next) {
  request({
    uri: teamMember,
    qs: {
      api_key: '123456',
      query: 'react pro'
    }
  }).pipe(res);
});

// router.get('/', function(req, res, next) {
//   res.send("ok");
 
// });

module.exports = router;
