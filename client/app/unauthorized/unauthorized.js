'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('unauthorized', {
        url: '/unauthorized',
        templateUrl: 'app/unauthorized/unauthorized.html',
        controller: 'UnauthorizedCtrl'
      });
  });