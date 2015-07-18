'use strict';

angular.module('myAppApp')
  .controller('NavbarCtrl', ['$scope','$state', '$location', 'UserAuthFactory', function ($scope, $state, $location, UserAuthFactory) {
    $scope.$state = $state;
    $scope.menu = [{
      'title': 'Accueil',
      'link': 'main',
       'id':'1'
    },
    {
        'title': 'Mon Compte',
        'link': 'account',
        'id':'2'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.logout = function () {
        debugger;
        UserAuthFactory.logout();
    }
  }]);