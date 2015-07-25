'use strict';

angular.module('myAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngMaterial',
  'ngMessages',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

angular.module('myAppApp').run(function($rootScope, $state, $window, $location, AuthenticationFactory) {
    // when the page refreshes, check if the user is already logged in
    AuthenticationFactory.check();

    $rootScope.$on("$stateChangeStart", function(event, nextRoute, currentRoute) {

        if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
            $location.path("/login");
        }
        else if ((nextRoute.access && nextRoute.access.requiredLogin && nextRoute.access.requiredPermissions) && AuthenticationFactory.isLogged) {

            if(nextRoute.access.requiredPermissions !== undefined && nextRoute.access.requiredPermissions.length > 0){
                if(nextRoute.access.requiredPermissions.indexOf(AuthenticationFactory.userRole) === -1){
                    event.preventDefault();
                    return $state.go('unauthorized');
                }
            }

        }
        else {
            // check if user object exists else fetch it. This is incase of a page refresh
            if (!AuthenticationFactory.user) AuthenticationFactory.user = $window.sessionStorage.user;
            if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
        }
    });

    $rootScope.$on('$stateChangeSuccess', function(event, nextRoute, currentRoute) {
        $rootScope.showMenu = AuthenticationFactory.isLogged;
        $rootScope.role = AuthenticationFactory.userRole;
        // if the user is already logged in, take him to the home page
        if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
            $location.path('/');
        }
    });
});