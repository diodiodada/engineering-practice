/**
 * Created by Administrator on 2016/9/19.
 */
(function () {
  'use strict';
  angular.module('starter.directives')
    .directive('companyDirective',[function () {
      return {
        restrict:'E',
        replace:true,
        template:'<div style="width: 100%; height:44px; text-align: center; position: absolute; bottom: {{bottom}};" >\
                  <h6>@2017-考勤</h6>\
                  </div>',
        scope:{
          bottom:'@'
        }
      };
    }]);
})();
