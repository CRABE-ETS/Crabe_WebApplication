'use strict';
//This Factory is responsible for checking the user status on the client side
angular.module('myAppApp')
  .factory('AuthenticationFactory', function ($window) {
    var auth = {
    isLogged: false,
    check: function() {
      if ($window.sessionStorage.token && $window.sessionStorage.user) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
        delete this.user;
      }
    }
  }

    return auth;
  });
