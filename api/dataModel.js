const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for user data
let userdata = new Schema({
  username: {
    type: String
  },
  hobbies: {
    type: String
  },
  avatar: {
    type: String
  }
},{
    collection: 'userdata'
});

module.exports = mongoose.model('userdata', userdata);