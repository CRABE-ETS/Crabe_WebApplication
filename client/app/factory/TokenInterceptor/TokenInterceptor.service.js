
'use strict';
//This factory is responsible for sending in the access
// token and the key along with each request to the server
angular.module('myAppApp')
  .factory('TokenInterceptor', function ($window) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
          config.headers['X-Access-Token'] = $window.sessionStorage.token;
          config.headers['X-Key'] = $window.sessionStorage.user;
          config.headers['Content-Type'] = "application/json";
        }
        return config || $q.when(config);
      },

      response: function(response) {
        return response || $q.when(response);
      }
    };
  });
