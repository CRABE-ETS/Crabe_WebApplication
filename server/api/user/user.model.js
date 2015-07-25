'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  firstName: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
  role: { type: String, default: "member" },
  active:{ type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);