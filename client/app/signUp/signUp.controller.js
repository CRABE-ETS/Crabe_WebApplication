'use strict';

angular.module('myAppApp')
  .controller('SignUpCtrl', function ($scope,$http) {
    $scope.user = {
        name:'Jeanroy',
        firstName:'César',
        email:'cesar.jeanroy@gmail.com',
        password:'qwerty'
    };

    $scope.submitInscription=function(){

        $http.post("/api/SignUp",$scope.user).success(function(){
            alert("inscription faite");
          $location.path("/login");

        }).error(function(){
            alert("Problème !!!");
        });
    }

  });
