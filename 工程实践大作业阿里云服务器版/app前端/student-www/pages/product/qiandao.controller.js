/**
 * Created by ChiZhiBiao on 2016/8/12.
 */
angular.module("starter.controllers")
  .controller('QiandaoCtrl',['$scope','$state','$http','$ionicPopup','LocalStorageService','$ionicLoading',
    function ($scope,$state,$http,$ionicPopup,LocalStorageService,$ionicLoading) {


      $scope.$on('$stateChangeSuccess',function () {
        $scope.checkin = {
          name:'',
          roomnumber:'',
          seatnumber:''
        };
      });

        $scope.save = function (){
          //console.log('username: ' + $scope.loginData.username);
          console.log('保存');

          var loginObject = LocalStorageService.get('Login');

          var oDate = new Date(); //实例一个时间对象；
          var year = oDate.getFullYear();
          var month = oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
          var date = oDate.getDate();
          //var hour = oDate.getHours();
          //var minute = oDate.getMinutes();
          //var second = oDate.getSeconds();

          console.log('name: ' + $scope.checkin.name);
          console.log('roomnumber: ' + $scope.checkin.roomnumber);
          console.log('seatnumber: ' + $scope.checkin.seatnumber);
          console.log('时间: ' + year+ '-' +month+ '-' + date );


          var url = 'http://39.108.122.237:8080/JSPStudy/CheckInServlet';
          var params = {
            studentNumber : loginObject.username,
            time          : year+ '-' +month+ '-' + date,
            course        : $scope.checkin.name,
            place         : '111,111',
            idCode        : '111111111',
            status        : '已签到'
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
                  ,template:'签到成功'
                  ,okType:'button-energized'
                };
                $ionicPopup.alert(options);
              }
              else {
                var options = {
                  title:'警告'
                  ,okText:'确认'
                  ,template:'签到失败'
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
