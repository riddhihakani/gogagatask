var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get("/", function(req, res, next){
  // Get all campgrounds from DB
  User.find({}, function(err, allUsers){
     if(err){
         console.log(err);
     } else {
        res.render('users',{users:allUsers});
     }
  });
});

/*Get add user form */
router.get('/add_user',function(req, res, next) {
  res.render('userform');
});

/*Post a new user */
router.post("/", function(req, res, next){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var state = req.body.state;
  var city = req.body.city;
  
  var newUser = {name: name,state : state, city: city}
  // Create a new campground and save to DB
  User.create(newUser, function(err, newlyCreated){
      if(err){
          console.log(err);
      } else {
          //redirect back to campgrounds page
          console.log(newlyCreated);
          res.redirect("/users");
      }
  });
});

module.exports = router;
