var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage');
});

router.get('/autocomplete',function(req, res, next){
  var regex = new RegExp(req.query['term'],'i');

  var namefilter = User.find({name:regex},{'name':1}).sort({'updated_at':-1}).sort({'created_at':-1}).limit(20);
  
  namefilter.exec(function(err,data){
    console.log('hey');
    console.log(data);
      var result=[];
      if(!err){
        if(data && data.length && data.length>0){
          data.forEach(user=>{
            let obj = {
              id:user._id,
              label:user.name
            };
            result.push(obj);
          });
        }
        console.log(result);
        res.jsonp(result);
      }
  });
});




module.exports = router;
