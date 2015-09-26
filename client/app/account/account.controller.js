'use strict';

angular.module('myAppApp')
  .controller('AccountCtrl', function ($scope,user,$rootScope,$window) {

   //console.log($window.sessionStorage.userId);
   $scope.user=user.get({"id":$window.sessionStorage.userId});
   $scope.user.password_confirm="";
   $scope.updateProfile=function(){

       if($scope.user.password === $scope.user.password_confirm){

           user.update(
               {"id":$window.sessionStorage.userId},
               {name :  $scope.user.name,
                   firstName:  $scope.user.firstName,
                   email:  $scope.user.email,
                   password:  $scope.user.password }).$promise
               .then(function(){
                   alert("compte updaté");
               })
               .catch(function(response){
                   alert("FAIL !! :"+response.data.reason);
               });
       }
       else{
           alert("Confirmer le mot de passe");
       }
   };

});
