(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('User_infoCtrl',['$scope','$ionicHistory','$state','LocalStorageService',
      function ($scope,$ionicHistory,$state,LocalStorageService) {


        $scope.$on('$stateChangeSuccess',function () {


          var user = LocalStorageService.get('user');

          $scope.name = user.name;
          $scope.studentNumber = user.studentNumber;
          $scope.password = user.password;
          $scope.course = user.course;
          $scope.usertype = user.usertype;



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
          $state.go('login');
        };

        $scope.welcome = function () {
          $state.go('welcome');
        };

      }]);
})();
