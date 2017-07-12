

angular.module("starter.controllers")
  .controller('Course_planCtrl',['$scope','$state','$http','$ionicPopup','LocalStorageService','$ionicLoading',
    function ($scope,$state,$http,$ionicPopup,LocalStorageService,$ionicLoading) {


      $scope.$on('$stateChangeSuccess',function () {
        $scope.course ='';

        var user = LocalStorageService.get('user');

        var course_array = user.course.split('&');
        $scope.course = course_array;
        $scope.length = course_array.length;



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
