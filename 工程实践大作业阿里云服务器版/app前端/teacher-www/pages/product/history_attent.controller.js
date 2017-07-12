
angular.module("starter.controllers")
  .controller('HistoryCtrl',['$scope','$state','$http','$ionicPopup','LocalStorageService','$ionicLoading',
    function ($scope,$state,$http,$ionicPopup,LocalStorageService,$ionicLoading) {




      $scope.$on('$stateChangeSuccess',function () {
        $scope.a={
          classname:'汇编语言',
          studentNumber:'160327001'
        }


      });



      $scope.inquirybycourse = function () {

        console.log('username: ' + $scope.a.classname);
        console.log('password: ' + $scope.a.studentNumber);


        var url = 'http://39.108.122.237:8080/JSPStudy/attendanceServlet';

        var params = {
          bywhat : 'course',
          studentNumber : $scope.a.classname
        };

        var postCfg = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          transformRequest: function (data) {
            return $scope.serialization(data);
          }
        };

        $ionicLoading.show({template: 'loading...'});

        $http.post(url, params, postCfg)
          .success(function (response) {
            $ionicLoading.hide();



            //$scope.attend = response.para1;

            var rec_array = response.para1.split('&');
            $scope.array =[];
            $scope.length = rec_array.length;

            for (var i=0;i<$scope.length;i++)
            {
              $scope.array[i]=rec_array[i].split('#');
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

      $scope.inquirybystunum = function () {

        console.log('username: ' + $scope.a.classname);
        console.log('password: ' + $scope.a.studentNumber);


        var url = 'http://39.108.122.237:8080/JSPStudy/attendanceServlet';

        var params = {
          bywhat : 'studentNumber',
          studentNumber : $scope.a.studentNumber
        };

        var postCfg = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          transformRequest: function (data) {
            return $scope.serialization(data);
          }
        };

        $ionicLoading.show({template: 'loading...'});

        $http.post(url, params, postCfg)
          .success(function (response) {
            $ionicLoading.hide();



            //$scope.attend = response.para1;

            var rec_array = response.para1.split('&');
            $scope.array =[];
            $scope.length = rec_array.length;

            for (var i=0;i<$scope.length;i++)
            {
              $scope.array[i]=rec_array[i].split('#');
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

    }]);
