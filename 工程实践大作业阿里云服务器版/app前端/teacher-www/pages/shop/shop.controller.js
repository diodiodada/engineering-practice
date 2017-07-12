/**
 * Created by zj on 2016/11/19.
 */

(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ShopCtrl',['$scope','$state','LocalStorageService',function ($scope,$state,LocalStorageService) {



      // var shopData = {
      //   Name:'周老板的店',
      //   SN:'zj',
      //   CreateDate:'2016／11／11',
      //   Phone:'13290986038',
      //
      //   Email:'897665728@qq.com',
      //   Boss:'周杰',
      //   ShopPhone:'13290986038',
      //   Category:'IT',
      // }
      // LocalStorageService.add('Shop',shopData);
      // console.log(LocalStorageService.get('Shop'));


      //$scope.shopData = LocalStorageService.get('Shop');
      $scope.edit = function (title) {
        $state.go('app.shopedit',{title:title});
      }

      $scope.$on('$stateChangeSuccess',function (event,toSate,toParams,fromState,fromParams) {
        $scope.shopData = LocalStorageService.get('Shop');
        // console.log('event:',event);
        // console.log('toState:',toSate);
      });
    }]);
})();

















