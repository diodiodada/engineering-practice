/**
 * Created by zj on 2016/11/7.
 */
/**
 * Created by Administrator on 2016/11/5.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('CategoryAddCtrl', ['$scope','$state',function ($scope,$state) {

      $scope.category = {
        //$state.id;
        ID:$state.params.id
        ,Name:$state.params.name
        ,Children:[{
          ID:0
          ,Name:''
        }]
      };

      console.log($scope.category);

      $scope.title = '新增分类';

      if( $scope.category.ID!=0){
        $scope.title = '新增小分类';
      }

      $scope.addSection = function () {
        $scope.category.Children.push({
          ID:0
          ,Name:''
        });
      };

    }]);
})();
