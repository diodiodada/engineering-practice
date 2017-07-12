/**
 * Created by zj on 2016/11/6.
 */

/**
 * Created by Administrator on 2016/10/29.
 */
(function () {
  'use strict';
  var APP_KEY = 'App';
  angular.module('starter.controllers')
    .controller('MainCtrl', ['$scope','LocalStorageService','$state',function ($scope,LocalStorageService,$state) {

      LocalStorageService.add(APP_KEY,{
        version:'1.0.0'
        ,run:false
      })

      var config = LocalStorageService.get(APP_KEY,{
        version:'1.0.0'
        ,run:false
      });
      if(config.run === false) {
        config.run = true;
        LocalStorageService.update(APP_KEY,config);
        $state.go('welcome');
      }
      else {
        $state.go('app.home');
      }
    }]);
})();
