/**

 */

(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('HomeCtrl', ['$scope','$state','$http','$ionicPopup','LocalStorageService','$ionicLoading',
      function ($scope,$state,$http,$ionicPopup,LocalStorageService,$ionicLoading) {

      $scope.$on('$ionicView.enter',function (event,data) {
        var object = LocalStorageService.get('Login');
        if(object.isLogin === false){
          $state.go('login');
        }

        $scope.name = object.username;

        var oDate = new Date(); //实例一个时间对象；
        var year = oDate.getFullYear();
        var month = oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
        var date = oDate.getDate();


        $scope.date = year+ '-' +month+ '-' + date ;


        console.log(object.username );

        var url = 'http://39.108.122.237:8080/JSPStudy/UserServlet';
        var params = {
          studentNumber : object.username
        };
        var postCfg = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          transformRequest: function (data) {
            return $scope.serialization(data);
          }
        };


        var user = LocalStorageService.get('user',{
          name:"",
          studentNumber:'',
          password:"",
          course:"",
          usertype:""
        });




        //$ionicLoading.show({template: 'loading...'});

        $http.post(url, params, postCfg)
          .success(function (response) {
            //$ionicLoading.hide();

            console.log('para1:'+response.para1+response.para2+response.para3+response.para4+response.para5);

            console.log('获取成功');

            user.name = response.para1;
            user.studentNumber = response.para2;
            user.password = response.para3;
            user.course = response.para4;
            user.usertype = response.para5;

            LocalStorageService.update('user',user);

            console.log(user.name );

            $scope.name = user.name;
            $scope.type = user.usertype;


          })
          .error(function (data, status, headers, config) {
            console.log('*******error*****');
            console.log(data);
            console.log(headers);
            console.log(config);
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: '提示'
              , subTitle: ''
              , template: '网络请求出错，服务器返回:'+status
              , okText: ''
            });
          });




      });

      $scope.serialization = function ( data ) {
        // If this is not an object, defer to native stringification.
        if ( ! angular.isObject( data ) ) {
          return( ( data == null ) ? "" : data.toString() );
        }
        var buffer = [];
        // Serialize each key in the object.
        for ( var name in data ) {
          if ( ! data.hasOwnProperty( name ) ) {
            continue;
          }
          var value = data[ name ];
          buffer.push(
            encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
          );
        }
        // Serialize the buffer and clean it up for transportation.
        var source = buffer.join( "&" ).replace( /%20/g, "+" );
        return(source);
      };

    }]);
})();
