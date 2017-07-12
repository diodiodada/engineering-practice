
angular.module("starter.controllers")
  .controller('attendanceCtrl',['$scope','$state','$http','$ionicPopup','LocalStorageService','$ionicLoading',
    function ($scope,$state,$http,$ionicPopup,LocalStorageService,$ionicLoading) {


      $scope.$on('$stateChangeSuccess',function () {
        $scope.attend ='';
        $scope.array =[];

        var loginObject = LocalStorageService.get('Login');

        var url = 'http://39.108.122.237:8080/JSPStudy/attendanceServlet';
        var params = {
          bywhat : 'studentNumber',
          studentNumber : loginObject.username
        };
        var postCfg = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          transformRequest: function (data) {
            return $scope.serialization(data);
          }
        };
        var array=[];



        $ionicLoading.show({template: 'loading...'});

        $http.post(url, params, postCfg)
          .success(function (response) {
            $ionicLoading.hide();


            //$scope.attend = response.para1;

            var rec_array = response.para1.split('&');
            $scope.attend = rec_array;
            $scope.length = rec_array.length;

            for (var i=0;i<$scope.length;i++)
            {
              $scope.array[i]=$scope.attend[i].split('#');
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
