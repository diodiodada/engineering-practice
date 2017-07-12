/**
 * Created by zj on 2016/11/20.
 */

(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ShopEditCtrl',['$scope','$stateParams','LocalStorageService',
      function ($scope,$stateParams,LocalStorageService) {

      $scope.title = $stateParams.title;

      $scope.inputData = {
        value:''
      };

      $scope.shopData = LocalStorageService.get('Shop',{
        ID:0
        ,Name:'周老板的店'
        ,Boss:''
        ,Phone:'13290986038'
        ,Email:'897665728@qq.com'
        ,Category:''
        ,ShopPhone:''
        ,SN:''
        ,CreateDate:'2016-11-11'
      });

      if($scope.title=='店铺名称'){
        $scope.inputData.value = $scope.shopData.Name;
      }
      else if($scope.title=='店铺简称'){
        $scope.inputData.value = $scope.shopData.SN;
      }
      else if($scope.title=='店主姓名'){
        $scope.inputData.value = $scope.shopData.Boss;
      }
      else if($scope.title=='店铺电话'){
        $scope.inputData.value = $scope.shopData.ShopPhone;
      }
      else if($scope.title=='行业类型'){
        $scope.inputData.value = $scope.shopData.Category;
      }


      $scope.save = function () {
        if($scope.title=='店铺名称'){
          $scope.shopData.Name = $scope.inputData.value;
        }
        else if($scope.title=='店铺简称'){
          $scope.shopData.SN = $scope.inputData.value;
        }
        else if($scope.title=='店主姓名'){
          $scope.shopData.Boss = $scope.inputData.value;
        }
        else if($scope.title=='店铺电话'){
          $scope.shopData.ShopPhone = $scope.inputData.value;
        }
        else if($scope.title=='行业类型'){
          $scope.shopData.Category = $scope.inputData.value;
        }

        LocalStorageService.update('Shop',$scope.shopData);

      };
    }]);
})();
