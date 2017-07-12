(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicHistory','$state','LocalStorageService',
      function ($scope,$ionicHistory,$state,LocalStorageService) {

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
          $state.go('login');
        };

        $scope.welcome = function () {
          $state.go('welcome');
        };

      }]);
})();


