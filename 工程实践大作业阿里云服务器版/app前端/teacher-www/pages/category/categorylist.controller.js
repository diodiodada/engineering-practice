/**
 * Created by Administrator on 2016/9/20.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('CategoryListCtrl',['$scope','$ionicActionSheet','$ionicHistory','CategoryService',function ($scope,$ionicActionSheet,$ionicHistory,CategoryService) {

      $scope.categories = [
        {
          ID:1
          ,Name:'专业必修'
          ,Children:[
          {
            ID:5
            ,Name:'软件工程'
            ,Children:[]
          }
          ,{
            ID:6
            ,Name:'工程实训'
            ,Children:[]
          }
          ,{
            ID:7
            ,Name:'计算机网络'
            ,Children:[]
          }
        ]
        }
        ,{
          ID:2
          ,Name:'专业选修'
          ,Children:[
            {
              ID:8
              ,Name:'数字图像处理'
              ,Children:[]
            }
            ,{
              ID:9
              ,Name:'分布式数据库'
              ,Children:[]
            }
          ]
        }
        ,{
          ID:3
          ,Name:'公共必修'
          ,Children:[
            {
              ID:10
              ,Name:'中国特色社会主义'
              ,Children:[]
            }
            ,{
              ID:11
              ,Name:'毛泽东思想'
              ,Children:[]
            }
            ,{
              ID:12
              ,Name:'马克思主义'
              ,Children:[]
            }
          ]
        }
        ,{
          ID:4
          ,Name:'公共选修'
          ,Children:[
            {
              ID:13
              ,Name:'英语1'
              ,Children:[]
            }
            ,{
              ID:14
              ,Name:'英语2'
              ,Children:[]
            }
            ,{
              ID:15
              ,Name:'影视鉴赏'
              ,Children:[]
            }
            ,{
              ID:16
              ,Name:'音乐鉴赏'
              ,Children:[]
            }
          ]
        }
        ,{
          ID:'17'
          ,Name:'默认类别'
          ,Children:[]
        }
      ];

      $scope.activeCategory = $scope.categories[0];

      $scope.sections = $scope.categories[0].Children;

      $scope.activeSection = {};

      $scope.selectCategory = function (id) {
        if($scope.activeCategory.ID != id) {
          angular.forEach($scope.categories,function (data,index) {
            if(data.ID==id){
              $scope.activeCategory = data;
              $scope.sections = data.Children;
            }
          });
        }
      };

      $scope.selectSection = function (data) {
        $scope.activeSection = data;
        $ionicHistory.goBack();
      };

      $scope.showActionSheet = function () {
        $ionicActionSheet.show({
          buttons:[
            {
              text:'新增小分类'
            }
            ,{
              text:'编辑分类'
            }
          ]
          ,cancelText:'取消'
          ,buttonClicked:function (index) {
            //console.log(index);
            switch(index){
              case 0:
                $scope.gotoAddCategory();
                break;
              case 1:
                console.log(index);
                break;
            }
          }
        });
      };

      $scope.gotoAddCategory = function () {
        //$location
        location.href = '#/app/categoryadd/' + $scope.activeCategory.ID + '/' + $scope.activeCategory.Name ;
      }

      $scope.$watch('activeSection',function (newValue,oldValue) {

        CategoryService.updateCategory($scope.activeSection);

      });

    }]);
})();










