const express = require('express');
const dataRoutes = express.Router();


// Require user data model in our routes module
let userdata = require('./dataModel.js');

// Defined store route
dataRoutes.route('/add').post(function (req, res) {
  let user = new userdata(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'user in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
dataRoutes.route('/').get(function (req, res) {
    userdata.find(function(err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});



module.exports = dataRoutes