'use strict';

var _ = require('lodash');
var Login = require('./login.model');
var userAuth = require('../../auth.js');

// Deletes a login from the DB.
exports.auth = function(req, res) {
   res.json(userAuth.login(req,res));
};

function handleError(res, err) {
  return res.send(500, err);
}