
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('AppCtrl',['$scope','$ionicHistory','$state','LocalStorageService',
      function ($scope,$ionicHistory,$state,LocalStorageService) {

        $scope.$on('$stateChangeSuccess',function () {


          var loginObject = LocalStorageService.get('Login');

          $scope.name = loginObject.username;


        });


        $scope.goBack = function () {
          $ionicHistory.nextViewOptions({
            disableBack:true
          });
          $state.go('app.home');
        };

        $scope.logout = function () {
          var obj = LocalStorageService.get('Login');
          obj.isLogin = false;
          LocalStorageService.update('Login',obj);

          LocalStorageService.delete('user');
          $state.go('login');
        };


      }]);
})();
