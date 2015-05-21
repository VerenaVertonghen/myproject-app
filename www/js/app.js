// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', 
['ionic', 'base64', 'ui.router', 'starter.controllers', 'starter.services','LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant("apiUrl","http://careapp.eu-gb.mybluemix.net")
.constant("admin","admin.admin@gmail.com:1234")
.constant("user","user.user@gmail.com:1234")

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })

  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: 'UserCtrl'
      }
    }
  })

  .state('app.caretaker', {
    url: "/caretaker",
    views: {
      'menuContent': {
        templateUrl: "templates/caretaker.html"
      }
    }
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html"
      }
    }
  })

  .state('app.assistance', {
    url: "/assistance",
    views: {
      'menuContent': {
        templateUrl: "templates/assistance.html"
      }
    }
  })

  .state('app.language', {
    url: "/language",
    views: {
      'menuContent': {
        templateUrl: "templates/language.html"
      }
    }
  })

  .state('app.notifications', {
    url: "/notifications",
    views: {
      'menuContent': {
        templateUrl: "templates/notifications.html"
      }
    }
  })

  .state('app.states', {
    url: "/states",
    views: {
      'menuContent': {
        templateUrl: "templates/states.html",
        controller: 'StateCtrl'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/register');
});
