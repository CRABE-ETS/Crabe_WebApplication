'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider,$httpProvider) {
      $httpProvider.interceptors.push('TokenInterceptor');
      $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        access: {
            requiredLogin: true
        }
      });
  });