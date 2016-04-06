// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core','ngCordova','starter.controllers'])
angular.module('toutcast', ['ionic','ngCordova','toutcast.controllers'])

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

    // kick off the platform web client
    Ionic.io();

    var settings = new Ionic.IO.Settings();
    var app_id = settings.get('app_id');
    console.log('TOUTCAST: App ID is: '+app_id);


    var details = {
      'email': 'acalo91@gmail.com',
      'password': 'password',
      'name':'Alex'
    };
    Ionic.Auth.signup(details).then(
      function()
      {
        console.log('TOUTCAST: Signup success');
        Ionic.Auth.login('basic', {'remember':true}, details).then(
          function()
          {
            console.log('TOUTCAST: Auth success')
            var user = Ionic.User.current();
          }, 
          function()
          {
            console.log('TOUTCAST: Auth Failure')
          });
        
      },
     function(e)
     {
        console.log('TOUTCAST: signup failure'); 
        console.log(JSON.stringify(e));
      });

    Ionic.Auth.login('basic', {'remember':true}, details).then(
      function()
      {
        console.log('TOUTCAST: Auth success')
        var user = Ionic.User.current();
      }, 
      function(e)
      {
        console.log('TOUTCAST: Auth Failure');
        console.log(JSON.stringify(e));
      });
    

    var push = new Ionic.Push({
      "debug": true,
      "onNotification": function(notification) {
        var payload = notification.payload;
        console.log(notification, payload);
      },
      "onRegister": function(data) {
        console.log('TOUTCAST: Register successful');
        console.log('TOUTCAST: '+data.token);
        push.saveToken(push.token);
      },
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
         },
         "android": {
            "iconColor": "#387ef5",
            "sound": true
         }
      } 
    });

    var user = Ionic.User.current();
    user.save();
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
        templateUrl: 'templates/home.html'
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
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
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
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
