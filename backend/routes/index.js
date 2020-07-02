var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');
//var udata = require("../routes/user.json")
//var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    res.send("welcome to login")
  });

  // router.post('/', function(req,res,next){
  //   const {body} = req;
  //   const {pwd, uid} = body;

    
  // });


//var udata = path.join(__dirname, './user.json');

router.post('/', function(req, res, next) {
    //var readable = fs.createReadStream(udata);
   
   // readable.pipe(res);
    console.log(req.body);
    // udata.find({
    //   username:username,
    //   password:password
    // },)
    //res.status(200).send('hi error')
    if(req.body.username == 'admin' && req.body.password == 'admin'){
      res.status(200).send({
        message:'success',
        isLogged:true,
        error:false
      })
    }else{
      res.status(200).send({
        message:'error',
        isLogged:false,
        error:true
      })
    }
});


module.exports = router;
