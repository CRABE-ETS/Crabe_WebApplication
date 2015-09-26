'use strict';

angular.module('myAppApp')
  .factory('user', function ($resource) {
    return $resource('http://localhost:9000/api/v1/user/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
  });
