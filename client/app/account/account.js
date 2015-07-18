'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider,$httpProvider) {
      $httpProvider.interceptors.push('TokenInterceptor');
      $stateProvider
      .state('account', {
        url: '/account',
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl',
        access: {
          requiredLogin: true,
          requiredPermissions:['member','admin']
        }
      });
  });