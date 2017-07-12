// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services','starter.directives','ngCordova','ngMessages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('main', {
      url: '/',
      controller: 'MainCtrl'
    })

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'pages/welcome/welcome.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'pages/login/login.html',
      controller: 'LoginCtrl'
    })


    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'pages/menu/menu.html',
      controller: 'AppCtrl'
    })


    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'pages/home/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.qiandao', {
      url: '/qiandao',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/qiandao.html',
          controller: 'QiandaoCtrl'
        }
      }
    })

    .state('app.qingjia', {
      url: '/qingjia',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/qingjia.html',
          controller: 'qingjiaCtrl'
        }
      }
    })

    .state('app.curriculum', {
      url: '/curriculum',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/curriculum.html',
          controller: 'curriculumCtrl'
        }
      }
    })


    .state('app.attendance', {
      url: '/attendance',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/attendance.html',
          controller: 'attendanceCtrl'
        }
      }
    })



    .state('app.user_info', {
      url: '/user_info',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/user_info.html',
          controller: 'User_infoCtrl'
        }
      }
    })

    .state('app.course_info', {
      url: '/course_info',
      views: {
        'menuContent': {
          templateUrl: 'pages/menu/course_info.html',
          controller: 'Course_infoCtrl'
        }
      }
    })


    .state('app.operator_guide', {
      url: '/operator_guide',
      views: {
        'menuContent': {
          templateUrl: 'pages/menu/operator_guide.html',
          controller: 'InstructionCtrl'
        }
      }
    })


    .state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent': {
          templateUrl: 'pages/menu/feedback.html',
          controller: 'FeedbackCtrl'
        }
      }
    })

    .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'pages/setting/setting.html',
          controller: 'SettingCtrl'
        }
      }
    })

    .state('app.changepassword', {
      url: '/changepassword',
      views: {
        'menuContent': {
          templateUrl: 'pages/changepassword/changepassword.html',
          controller: 'ChangePasswordCtrl'
        }
      }
    })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'pages/about/about.html',
        }
      }
    })

    .state('forgotpassword', {
      url: '/forgotpassword',
      templateUrl: 'pages/forgotpassword/forgotpassword.html'
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
