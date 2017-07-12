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

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'pages/login/login.html',
          controller: 'LoginCtrl'
        }
      }
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

    .state('app.current', {
      url: '/current',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/current_attent.html',
          controller: 'attendanceCtrl'
        }
      }
    })

    .state('app.history', {
      url: '/history',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/history_attent.html',
          controller: 'HistoryCtrl'
        }
      }
    })

    .state('app.productlist', {
      url: '/productlist',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/productlist.html',
          controller: 'ProductListCtrl'
        }
      }
    })

    .state('app.leave_query', {
      url: '/leave_query',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/leave_query.html',
          controller: 'Leave_queryCtrl'
        }
      }
    })



    .state('app.course_plan', {
      url: '/course_plan',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/course_plan.html',
          controller: 'Course_planCtrl'
        }
      }
    })












   .state('forgotpassword', {
      url: '/forgotpassword',
      templateUrl: 'pages/forgotpassword/forgotpassword.html'
   })

   .state('login', {
      url: '/login',
      templateUrl: 'pages/login/login.html',
      controller: 'LoginCtrl'
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

    .state('app.system_setting', {
      url: '/system_setting',
      views: {
        'menuContent': {
          templateUrl: 'pages/menu/system_setting.html',
          //controller: 'HistoryCtrl'
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


   .state('app.category', {
      url: '/categorylist',
      views: {
        'menuContent': {
          templateUrl: 'pages/category/categorylist.html',
          controller: 'CategoryListCtrl'
        }
      }
   })

   .state('app.categoryadd', {
      url: '/categoryadd/:id/:name',
      views: {
        'menuContent': {
          templateUrl: 'pages/category/categoryadd.html',
          controller: 'CategoryAddCtrl'
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

   .state('app.shop', {
      url: '/shop',
      views: {
        'menuContent': {
          templateUrl: 'pages/shop/shop.html',
          controller: 'ShopCtrl'
        }
      }
   })

   .state('app.shopedit', {
      url: '/shopedit',
      params:{title:''},
      views: {
        'menuContent': {
          templateUrl: 'pages/shop/shopedit.html',
          controller: 'ShopEditCtrl'
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





   .state('app.productdetail', {
      url: '/productdetail/:Name/:Price/:Stock/:Barcode',
      views: {
        'menuContent': {
          templateUrl: 'pages/product/productdetail.html',
          controller: 'ProductDetailCtrl'
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
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
