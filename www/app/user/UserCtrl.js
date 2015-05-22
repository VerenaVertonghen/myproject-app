angular.module('starter.UserCtrl').controller('UserCtrl', ['$scope', '$state', 'UserService', 'localStorageService','$base64',
    function($scope, $state, UserService, localStorageService,$base64) {
        console.log('into UserCtrl');
        
        $scope.singleUser = [];
        
        var encodedlogin = "";
        
        getLocalStorage();


        function getLocalStorage() {
            encodedlogin = localStorageService.get("ls-encoded");
            loadUser();
        }

        function loadUser() {
            var result = UserService.getUser(encodedlogin);
            result.success(getUserSuccess).error(getUserError);
        }

        function getUserSuccess(success) {
            $scope.singleUser = success;
        }

        function getUserError(error) {
            $scope.error = error;
        }

        // Logout function
        $scope.logout = function() {
            localStorageService.clearAll();
            $state.go('login');
        };

        $scope.expressFeelings = function(){
            $state.go('app.state1');
        };
    }
]);