/**
 * Created by zj on 2016/12/29.
 */

(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductDetailCtrl', ['$scope','$state','$ionicPopup','$ionicPopover', function ($scope,$state,$ionicPopup,$ionicPopover) {

      $scope.category = {
        //$state.id;
        ID:$state.params.id
        ,Name:$state.params.name
        ,Children:[{
          ID:0
          ,Name:''
        }]
      };

      $scope.item = {
        name:$state.params.Name,
        price:$state.params.Price,
        stock:$state.params.Stock,
        barcode:$state.params.Barcode,
      }



      $ionicPopover.fromTemplateUrl('pages/product/productdetailmenu.html',{scope:$scope}).then(function (popover) {
        $scope.popoverMenu = popover;
      });
      $ionicPopover.fromTemplateUrl('pages/product/sharing.html',{scope:$scope}).then(function (model) {
        $scope.shareModel = model;
      });
      $scope.showMenu = function ($event) {
        $scope.popoverMenu.show($event);
      };
      $scope.showModel = function () {
        $scope.shareModel.show();
      };


      // $scope.$on('$destroy',function () {
      //   $scope.popoverMenu.remove();
      // });
      // $scope.delete = function () {
      //   $scope.popoverMenu.hide();
      // };

      $scope.showPropmt = function () {
        $ionicPopup.prompt({
          title:'请输入管理员的密码'
          ,inputType:'password'
          ,inputPlaceholder:'密码'
          ,okText:'确定'
          ,okType:'button-energized'
          ,cancelText:'取消'
        }).then(function (res) {
          console.log('密码：',res);
        });
      };



    }]);
})();
