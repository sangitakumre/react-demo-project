var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');
//var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    res.send("welcome to login")
  });


var udata = path.join(__dirname, './user.json');

router.post('/', function(req, res, next) {
    var readable = fs.createReadStream(udata);
   
    readable.pipe(res);
    if(res.udata.uid == req.body.uid){
      res.status(200).send({
          message:"successful"
      })
    }
    
});


module.exports = router;
