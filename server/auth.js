var jwt = require('jwt-simple');
var User = require('./api/user/user.model');
var auth = {

  login: function(req, res) {

    var username = req.body.username || '';
    var password = req.body.password || '';

    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials1"
      });
      return;
    }

    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = auth.validate(username, password, function(err,dbUserObj){

      if (!dbUserObj) { // If authentication fails, we send a 401 back
        res.status(401);
        res.json({
          "status": 401,
          "message": "Invalid credentials2"
        });
        return;
      }

      if (dbUserObj) {

        // If authentication is success, we will generate a token
        // and dispatch it to the client

        res.json(genToken(dbUserObj));
      }
    });
  },

  validate: function(username, password,callback) {
    // spoofing the DB response for simplicity
    /*  var  dbUserObj = { // spoofing a userobject from the DB.
      name: 'cesar jeanroy',
      role: 'admin',
      username: 'cesar.jeanroy@gmail.com'
    };

    return dbUserObj;*/

     User.findOne({'email':username,'password':password}, function (err, user) {
          if(err) {
              callback(err);
            return;
          }
          if(!user){

            callback(null,null);
            return;

          }
          console.log(user);
          callback(null,user);
      });
  },

  validateUser: function(username) {
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB.
      name: 'arvind',
      role: 'admin',
      username: 'arvind@myapp.com'
    };

    return dbUserObj;
  }
}

// private method
function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('./config/secret')());

  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;
