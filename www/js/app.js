// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', 
['ionic', 'base64', 'ui.router','LocalStorageModule',
  'starter.controllers', 'starter.services','starter.directives','starter.filters',
  'starter.UserService','starter.StateService','starter.CategoryService','starter.NotificationService',
  'starter.UserCtrl','starter.StateCtrl','starter.CategoryCtrl','starter.NotificationCtrl'])

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

.constant("apiUrl","http://careapp2.eu-gb.mybluemix.net")

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
  })

  .state('app.state1', {
    url: "/state1",
    views: {
      'menuContent': {
        templateUrl: "templates/state1.html",
        controller: 'State1Ctrl'
      }
    }
  })

  .state('app.state2', {
    url: "/state2",
    views: {
      'menuContent': {
        templateUrl: "templates/state2.html",
        controller: 'State2Ctrl'
      }
    }
  })

  .state('app.state3', {
    url: "/state3",
    views: {
      'menuContent': {
        templateUrl: "templates/state3.html",
        controller: 'State3Ctrl'
      }
    }
  })

  .state('app.statefinal', {
    url: "/statefinal",
    views: {
      'menuContent': {
        templateUrl: "templates/statefinal.html",
        controller: 'StateFinalCtrl'
      }
    }
  })

  ;
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/register');
});
