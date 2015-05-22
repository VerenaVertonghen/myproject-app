angular.module('starter.UserCtrl').controller('RegisterCtrl', ['$scope', '$state','UserService',
    function($scope, $state, UserService) {
        console.log('into RegisterCtrl');

        $scope.inputType = 'password';
        $scope.user = {};
        $scope.submitSuccess = false;

        function createUserSuccess(success){
            $scope.success = success;
            $scope.submitSuccess = true;
        }

        function createUserError(error){
            $scope.error = error;
        }

        $scope.register = function(isValid) {
            if (isValid) {
                var result = UserService.createUser($scope.user.email, $scope.user.firstname, $scope.user.lastname, $scope.user.password);
                result.success(createUserSuccess).error(createUserError);
                $state.go('login');
            }
        };

        $scope.toLogin = function() {
            $state.go('login');
        }

        // Hide & show password function
        $scope.hideShowPassword = function() {
            if ($scope.inputType == 'password') $scope.inputType = 'text';
            else $scope.inputType = 'password';
        };
    }
]);