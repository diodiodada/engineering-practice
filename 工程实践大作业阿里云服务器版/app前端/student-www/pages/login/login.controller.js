/**
 *
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('LoginCtrl',['$scope','$state','$http','$ionicPopup','LocalStorageService','$ionicLoading',
      function ($scope,$state,$http,$ionicPopup,LocalStorageService,$ionicLoading) {

      $scope.$on('$stateChangeSuccess',function () {
        $scope.loginData = {
          username:'160327001'
          ,password:'01'
        };
      });

        $scope.login = function () {

          console.log('username: ' + $scope.loginData.username);
          console.log('password: ' + $scope.loginData.password);


          var url = 'http://39.108.122.237:8080/JSPStudy/loginServlet';
          var params = {
            username  : $scope.loginData.username,
            password  : $scope.loginData.password,
            usertype  : '学生'
          };
          var postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (data) {
              return $scope.serialization(data);
            }
          };
          var login_result='';

          $ionicLoading.show({template: 'loading...'});

          $http.post(url, params, postCfg)
            .success(function (response) {
              $ionicLoading.hide();
              //$scope.loginData.username = response.para1;
              console.log('result: ' + response.para1);
              login_result = response.para1;


              if(login_result === 'yes'){
                var loginObject = LocalStorageService.get('Login',{
                  username:'160327001'
                  ,password:'01'
                  ,isLogin:false
                });

                loginObject.username = $scope.loginData.username;
                loginObject.password = $scope.loginData.password;
                loginObject.isLogin = true;
                LocalStorageService.update('Login',loginObject);


                $state.go('app.home');
              }
              else {
                var options = {
                  title:'警告'
                  ,okText:'确认'
                  ,template:'用户名或者密码不正确，请重新输入'
                  ,okType:'button-energized'
                };
                $ionicPopup.alert(options);
              }
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


        };


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


        $scope.login_old = function () {
        var loginObject = LocalStorageService.get('Login',{
          username:'admin'
          ,password:'123456'
          ,isLogin:false
        });
        if($scope.loginData.username ===loginObject.username && $scope.loginData.password === loginObject.password){
          loginObject.isLogin = true;
          LocalStorageService.update('Login',loginObject);
          $state.go('app.home');
        }
        else {
          var options = {
            title:'警告'
            ,okText:'确认'
            ,template:'用户名或者密码不正确，请重新输入'
            ,okType:'button-energized'
          };
          $ionicPopup.alert(options);
        }
      };

    }]);
})();
