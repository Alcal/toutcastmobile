// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('toutcast', ['ionic','ionic.service.core','ngCordova','toutcast.controllers','toutcast.services', 'ionic-material','LocalStorageModule','ngAnimate'])

.run(function($ionicPlatform, $state) {
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

    // kick off the platform web client
    Ionic.io();

    var settings = new Ionic.IO.Settings();
    var app_id = settings.get('app_id');

    var details = {
      'email': 'acalo91@gmail.com',
      'password': 'password',
      'username':'alexcastro'
    };

    var push = new Ionic.Push({
      "onNotification": function(notification) {
        $state.go('app.home.map',{'location':notification.payload.location});
      },
      "onRegister": function(data) {

        var user = Ionic.User.current();
        user.set('name','Alex Castro');
        user.set('username','alexcastro');
        user.set('age',24);

        push.saveToken(data);

        user.save();
      },
      "pluginConfig": {
        "ios": {
          "badge": true
         },
         "android": {
            "iconColor": "#4aa636",
            "vibrate":true,
            "ledColor":[0,0,0,255]
         }
      }
    });

    Ionic.Auth.signup(details).then(
      function()
      {
        Ionic.Auth.login('basic', {'remember':true}, details).then(
          function()
          {
            push.register();
          },
          function(e)
          {
            console.log(JSON.stringify(e));
          });

      },
     function(e)
     {
        Ionic.Auth.login('basic', {'remember':true}, details).then(
        function()
        {
          var user = Ionic.User.current();
          push.register();
        },
        function(e)
        {
          console.log('TOUTCAST: Auth Failure');
          console.log(JSON.stringify(e));
        });

      });
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller:'TabsCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'browseContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

  .state('app.home.landing',{
    url:'/landing',
    views:{
      'landingContent':{
        templateUrl:'templates/landing.html',
        controller: 'LandingCtrl'
      }
    }
  })
  .state('app.home.map',{
    url:'/map',
    views:{
      'mainMapContent':{
        templateUrl:'templates/mainMap.html',
        controller: 'MainMapCtrl'
      }
    }
  })
  .state('app.home.feed',{
    url:'/feed',
    views:{
      'mainFeedContent':{
        templateUrl:'templates/mainFeed.html',
        controller: 'MainFeedCtrl'
      }
    }
  })
    .state('app.home.feed-detail',{
      url:'/feed/:toutId',
      views:{
        'mainFeedContent':{
          templateUrl:'templates/slide.html',
          controller: 'SlideCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
