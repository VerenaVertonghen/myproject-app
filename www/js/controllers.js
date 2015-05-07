angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('LogoutCtrl', function($scope, $state) {
  $scope.logout = function() {
    console.log('Log-out');
    $state.go('login');
  };
  
})

.controller('LoginCtrl', function($scope, $state) {
  
  $scope.login = function(user) {
    console.log('Log-in', user);
    $state.go('app.profile');
  };

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
  
})

.controller('IssuesCtrl', function($scope) {
  $scope.items = [
    { id: 1, title: 'Anxiety' },
    { id: 2, title: 'Depression' },
    { id: 3, title: 'Anorexia' },
    { id: 4, title: 'Selfharm' },
    { id: 5, title: 'Low Self Esteem' }
  ];
})

.controller('IssueCtrl', function($scope, $stateParams) {
});
