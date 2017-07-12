
angular.module("starter.controllers")
  .controller('qingjiaCtrl',['$scope','$state','$http','$ionicPopup','LocalStorageService','$ionicLoading',
    function ($scope,$state,$http,$ionicPopup,LocalStorageService,$ionicLoading) {


      $scope.$on('$stateChangeSuccess',function () {
        $scope.qingjia = {
          class:'',
          time:'',
          reason:''
        };
      });

      $scope.save = function (){
        //console.log('username: ' + $scope.loginData.username);
        console.log('保存');

        var loginObject = LocalStorageService.get('Login');

        console.log('class: ' + $scope.qingjia.class);
        console.log('time: ' + $scope.qingjia.time);
        console.log('reason: ' + $scope.qingjia.reason);


        var url = 'http://39.108.122.237:8080/JSPStudy/AskForLeaveServlet';
        var params = {
          studentNumber : loginObject.username,
          course        : $scope.qingjia.class,
          time          : $scope.qingjia.time,
          reason        : $scope.qingjia.reason
        };
        var postCfg = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          transformRequest: function (data) {
            return $scope.serialization(data);
          }
        };
        var checkin_result='';

        $ionicLoading.show({template: 'loading...'});

        $http.post(url, params, postCfg)
          .success(function (response) {
            $ionicLoading.hide();
            //$scope.loginData.username = response.para1;
            console.log('result: ' + response.para1);
            login_result = response.para1;


            if(login_result === 'yes'){
              var options = {
                title:'恭喜'
                ,okText:'确认'
                ,template:'请假申请成功'
                ,okType:'button-energized'
              };
              $ionicPopup.alert(options);
            }
            else {
              var options = {
                title:'警告'
                ,okText:'确认'
                ,template:'请假申请失败'
                ,okType:'button-energized'
              };
              $ionicPopup.alert(options);
            }

          }).error(function (data, status, headers, config) {
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



      }


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
