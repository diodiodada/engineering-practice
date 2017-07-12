(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('Course_infoCtrl',['$scope','$ionicHistory','$state','LocalStorageService',
      function ($scope,$ionicHistory,$state,LocalStorageService) {

        $scope.$on('$stateChangeSuccess',function () {
          $scope.course ='';

          var user = LocalStorageService.get('user');

          var course_array = user.course.split('&');
          $scope.course = course_array;
          $scope.length = course_array.length;



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
