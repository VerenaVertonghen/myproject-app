angular.module('starter.controllers', [])

.controller('CategoryCtrl', ['$scope','$state','CategoryService',
  function($scope, $state, CategoryService) {
    console.log('into CategoryCtrl');

    $scope.allCategories = [];

    loadCategories();

    function loadCategories() {
      var result = CategoryService.getCategories();
      result.success(getCategoriesSuccess).error(getCategoriesError);
    }

    function getCategoriesSuccess(success){
      $scope.allCategories = success;
      console.log($scope.allCategories);
    }

    function getCategoriesError(error){
      $scope.error = error;
    }

}])

.controller('StateCtrl', ['$scope','$state','StateService',
  function($scope, $state, StateService) {
    console.log('into StateCtrl');

    $scope.allStates = [];

    loadStates();

    function loadStates() {
      var result = StateService.getStates();
      result.success(getStatesSuccess).error(getStatesError);
    }

    function getStatesSuccess(success){
      $scope.allStates = success;
      console.log($scope.allStates);
    }

    function getStatesError(error){
      $scope.error = error;
    }

}])

.controller('UserCtrl', ['$scope','$state','UserService',
  function($scope, $state, UserService) {
    console.log('into UserCtrl');

    $scope.singleUser = [];

    loadUser();

    function loadUser() {
      var result = UserService.getUser();
      result.success(getUserSuccess).error(getUserError);
    }

    function getUserSuccess(success){
      $scope.singleUser = success;
      console.log($scope.singleUser);
    }

    function getUserError(error){
      $scope.error = error;
    }

    $scope.logout = function() {
      console.log('Log-out');
      $state.go('login');
    };

}])

.controller('AppCtrl', ['$scope','$ionicModal', '$timeout',
  function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};


}])

.controller('LoginCtrl',['$scope','$state','UserService', 
  function($scope, $state, UserService) {

    $scope.user = {};

    function getUserSuccess(success){
      $scope.singleUser = success;
      console.log($scope.singleUser);
      $state.go('app.profile');
    }

    function getUserError(error){
      $scope.error = error;
      $state.go('login');
      $scope.errormessage = "Login failed.";
      console.log($scope.errormessage);
    }

    $scope.login = function(user) {
      console.log("login username",user.username);
      console.log("login password",user.password);
      var result = UserService.getUser(user.username,user.password);
      result.success(getUserSuccess).error(getUserError);

      console.log('Log-in', user);
      //loadUser();
    };

    $scope.toRegister = function(){
      console.log('Go to register');
      $state.go('register');
    }

    /*Show/hide password*/
    // Set the default value of inputType
    $scope.inputType = 'password';
    
    // Hide & show password function
    $scope.hideShowPassword = function(){
      if ($scope.inputType == 'password')
        $scope.inputType = 'text';
      else
        $scope.inputType = 'password';
    };
    
  }])

// .controller('LoginCtrl',['$scope','$state','ionic.utils', 
//   function($scope, $state, ionic.utils) {
  
//   $scope.login = function(user) {
//     console.log('Log-in', user);
//     $state.go('app.profile');
//   };

//   $scope.toRegister = function(){
//     console.log('Go to register');
//     $state.go('register');
//   }

//   /*Show/hide password*/
//   // Set the default value of inputType
//   $scope.inputType = 'password';
  
//   // Hide & show password function
//   $scope.hideShowPassword = function(){
//     if ($scope.inputType == 'password')
//       $scope.inputType = 'text';
//     else
//       $scope.inputType = 'password';
//   };
  
// }])

.controller('RegisterCtrl',['$scope','$state', 
  function($scope, $state) {
  
  $scope.register = function(user) {
    console.log('Register', user);
    $state.go('login');
  };

  $scope.toLogin = function(){
    console.log('Go to login');
    $state.go('login');
  }

  /*Show/hide password*/
  // Set the default value of inputType
  $scope.inputType = 'password';
  
  // Hide & show password function
  $scope.hideShowPassword = function(){
    if ($scope.inputType == 'password')
      $scope.inputType = 'text';
    else
      $scope.inputType = 'password';
  };
  
}]);
