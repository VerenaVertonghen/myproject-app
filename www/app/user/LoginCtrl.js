angular.module('starter.UserCtrl').controller('LoginCtrl', ['$scope', '$state', 'UserService', 'localStorageService','$base64',
    function($scope, $state, UserService, localStorageService,$base64) {
        console.log('into LoginCtrl');
        
        $scope.user = {};
        $scope.loginError = false;
        $scope.inputType = 'password';

        var encodedlogin = "";
        
        getLocalStorage();

        // Get Local Storage Data
        function getLocalStorage() {
            password = localStorageService.get("ls-encoded");
        }

        // Do this when getUser is a success
        function getUserSuccess(success) {
            $scope.singleUser = success;
            localStorageService.set("ls-encoded", encodedlogin);
            $state.go('app.profile');
        }

        // Do this when getUser failed
        function getUserError(error) {
            $scope.error = error;
            $scope.loginError = true;
            $state.go('login');
        }

        // Login 
        $scope.login = function(user) {
            $scope.loginError = false;
            encodedlogin = $base64.encode(user.username + ":" + user.password);            
            var result = UserService.getUser(encodedlogin);
            result.success(getUserSuccess).error(getUserError);
        };

        // Go to register
        $scope.toRegister = function() {
            $scope.loginError = false;
            $state.go('register');
        }

        // Hide & show password
        $scope.hideShowPassword = function() {
            if ($scope.inputType == 'password') $scope.inputType = 'text';
            else $scope.inputType = 'password';
        };
    }
]);