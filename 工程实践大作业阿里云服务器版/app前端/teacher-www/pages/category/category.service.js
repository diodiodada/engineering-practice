/**
 * Created by zj on 2016/11/19.
 */


/**
 * Created by Administrator on 2016/9/23.
 */
(function () {
  'use strict';
  angular.module('starter.services')
    .factory('CategoryService',['$rootScope',function ($rootScope) {
      var service ={};
      service.activeCategory = {};
      service.updateCategory = function (data) {
        this.activeCategory = angular.copy(data) ;
        $rootScope.$broadcast('CategoryUpdate');
      };
      return service;
    }]);
})();
