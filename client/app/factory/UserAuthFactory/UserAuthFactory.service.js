'use strict';
//This factory is responsible for contacting the login endpoint and validating the user.
//And also logging out the user
angular.module('myAppApp')
  .factory('UserAuthFactory', function ($window, $location, $http, $state, AuthenticationFactory,$rootScope) {
    return {
      login: function(username, password) {
          return $http.post('http://localhost:9000/api/login', {
          username: username,
          password: password
        });
      },
      logout: function() {

        if (AuthenticationFactory.isLogged) {

          AuthenticationFactory.isLogged = false;

          delete $window.sessionStorage.token;
          delete $window.sessionStorage.user;
          delete $window.sessionStorage.userRole;
          delete AuthenticationFactory.user;
          delete AuthenticationFactory.userRole;

          if($location.path()==="/login")
          {
              $state.reload();
          }else{
             $location.path("/login");

          }

        }

      }
    }
  });
