/**
 * Created by zj on 2016/11/6.
 */

(function () {
  'use strict';
  angular.module('starter.services')
    .factory('LocalStorageService',[function () {
      var service = {};

      service.get = function (key,defaultValue) {
        var temp = localStorage.getItem(key);
        var value ;
        try {
          value = angular.fromJson(temp);
        }
        catch (error){
          value = null;
        }
        if(!value && defaultValue){
          value = defaultValue;
        }
        return value;
      };

      service.update = function(key, value){
        if(value){
          localStorage.setItem(key,angular.toJson(value));
        }
      };

      service.add = function (key, value) {
        this.update(key,value);
      };

      service.delete = function (key) {
        localStorage.removeItem(key);
      };

      return service;
    }]);

})();
