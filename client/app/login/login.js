'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider,$httpProvider) {
      $httpProvider.interceptors.push('TokenInterceptor');
      $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        access: {
            requiredLogin: false
        }
      });
  });