'use strict';

var _ = require('lodash');
var NavigationBar = require('./navigationBar.model');
var validateUser = require('../../auth').validateUser;

// Get list of navigationBars
exports.getNavigationBar = function(req, res) {

   /*var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];
    var dbUser = validateUser(key); // The key would be the logged in user's username

    if (dbUser) {
        if (req.url.indexOf('admin') >= 0 && dbUser.role == 'admin'){
            var navigationBars=[{
                'title': 'Accueil',
                'link': 'main',
                    'id':'1'
            },
            {
                'title': 'Mon Compte',
                'link': 'account',
                'id':'2'
            },
            {
                'title': 'Gestion des utilisateurs',
                'link': 'account',
                'id':'3'
            }];
            return res.json(200, navigationBars);
        }
        else if (req.url.indexOf('admin') < 0 && req.url.indexOf('/api/v1/') >= 0){
            var navigationBars=[{
                'title': 'Accueil',
                'link': 'main',
                'id':'1'
            },
            {
                'title': 'Mon Compte',
                'link': 'account',
                'id':'2'
            }];*/
        var navigationBars=[{
            title: 'Accueil',
            link: 'main',
            id:'1'
        },{

            title: 'Mon Compte',
            link: 'account',
            id:'2'
        },
        {
            title: 'Gestion des utilisateurs',
            link: 'account',
            id:'3'
        }];

    return res.json(200, navigationBars);
        //}
};


// Get a single navigationBar
exports.show = function(req, res) {
  NavigationBar.findById(req.params.id, function (err, navigationBar) {
    if(err) { return handleError(res, err); }
    if(!navigationBar) { return res.send(404); }
    return res.json(navigationBar);
  });
};

// Creates a new navigationBar in the DB.
exports.create = function(req, res) {
  NavigationBar.create(req.body, function(err, navigationBar) {
    if(err) { return handleError(res, err); }
    return res.json(201, navigationBar);
  });
};

// Updates an existing navigationBar in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  NavigationBar.findById(req.params.id, function (err, navigationBar) {
    if (err) { return handleError(res, err); }
    if(!navigationBar) { return res.send(404); }
    var updated = _.merge(navigationBar, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, navigationBar);
    });
  });
};

// Deletes a navigationBar from the DB.
exports.destroy = function(req, res) {
  NavigationBar.findById(req.params.id, function (err, navigationBar) {
    if(err) { return handleError(res, err); }
    if(!navigationBar) { return res.send(404); }
    navigationBar.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}