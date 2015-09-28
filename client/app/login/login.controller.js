'use strict';

angular.module('myAppApp')
  .controller('LoginCtrl',['$scope', '$rootScope','$window', '$location', 'UserAuthFactory', 'AuthenticationFactory',
        function($scope, $rootScope, $window, $location, UserAuthFactory, AuthenticationFactory){

        $scope.user = {
            username: 'cesar.jeanroy@gmail.com',//cesar.jeanroy@gmail.com
            password: 'qwerty2'//qwerty
        };

        $scope.login = function() {

            var username = $scope.user.username,
                password = $scope.user.password;

            if (username !== undefined && password !== undefined) {
                UserAuthFactory.login(username, password).success(function (data) {

                    AuthenticationFactory.isLogged = true;
                    AuthenticationFactory.user = data.user.email;
                    AuthenticationFactory.userRole = data.user.role;


                    $window.sessionStorage.token = data.token;
                    $window.sessionStorage.user = data.user.username; // to fetch the user details on refresh
                    $window.sessionStorage.userId = data.user._id;
                    $window.sessionStorage.userRole = data.user.role; // to fetch the user details on refresh

                   /* $rootScope.$broadcast('fetchNavigationBar');*/

                    $location.path("/");

                }).error(function (status) {
                    alert('Oops something went wrong!'+status.message);
                });
            } else {
                alert('Invalid credentials');
            }
        };
  }]);
