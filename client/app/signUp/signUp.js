'use strict';

angular.module('myAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signUp', {
        url: '/signUp',
        templateUrl: 'app/signUp/signUp.html',
        controller: 'SignUpCtrl',
        access: {
            requiredLogin: false
        }
      });
  });