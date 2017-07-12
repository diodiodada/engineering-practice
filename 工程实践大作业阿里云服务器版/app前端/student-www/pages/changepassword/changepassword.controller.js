(function () {
    'use strict';
    angular.module('starter.controllers')
        .controller('ChangePasswordCtrl', ['$scope','PopupService',function ($scope,PopupService) {
            $scope.save = function () {
                if($scope.myForm.$invalid)
                 return;


                if($scope.changePasswordData.oldPassword != "123456"){
                    PopupService.alert('旧的密码不正确，请重新输入');
                    return;
                }



                if($scope.myForm.oldPassword.$error.required){
                    PopupService.alert('请输入旧的密码');
                    return;
                }


                if($scope.myForm.newPassword.$error.required){
                    PopupService.alert('请输入新的密码');
                    return;
                }


                if($scope.myForm.newPassword.$error.minlength){
                    PopupService.alert('新密码的长度不能小于6位');
                    return;
                }

            };
            $scope.changePasswordData = {
                oldPassword:''
                ,newPassword:''
                ,confirmPassword:''
            };
        }]);
})();
