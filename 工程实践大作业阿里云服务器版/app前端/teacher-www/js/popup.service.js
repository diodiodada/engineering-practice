/**
 * Created by Administrator on 2016/10/13.
 */
(function () {
  'use strict';
  angular.module('starter.services')
    .factory('PopupService',['$ionicPopup','$timeout',function ($ionicPopup,$timeout) {
      var service ={};

      service.alert = function (message) {
        var options = {
          title:'警告'
          ,okText:'确认'
          ,template:message
          ,okType:'button-energized'
        };
        $ionicPopup.alert(options);
      };

      return service;
    }]);
})();
