'use strict';

angular.module('myAppApp')
  .controller('NavbarCtrl', ['$scope','$state', '$http', '$location', 'UserAuthFactory','AuthenticationFactory', function ($scope, $state, $http, $location, UserAuthFactory, AuthenticationFactory) {
    $scope.$state = $state;
    $scope.menu = [{
        title: 'Accueil',
        link: 'main',
        id:'1'
    },{

        title: 'Mon Compte',
        link: 'account',
        id:'2'
    },
        {
            title: 'Gestion des utilisateurs',
            link: 'account',
            id:'3'
        }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.logout = function () {
        UserAuthFactory.logout();
    };
    /*
    $scope.$on("fetchNavigationBar",function(){
        $http.get('/api/navigationBar').success(function(navigationBar){ $scope.menu = navigationBar;});
    });
    */

  }]);