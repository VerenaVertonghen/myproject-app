angular.module('starter.StateCtrl').controller('StateCtrl', ['$scope', '$state', 'StateService', 'localStorageService',
    function($scope, $state, StateService, localStorageService) {
        console.log('into StateCtrl');

        $scope.allStates = [];
        
        var encodedlogin = "";

        
        getLocalStorage();

        function getLocalStorage() {
            encodedlogin = localStorageService.get("ls-encoded");
            loadStates();
        }

        function loadStates() {
            console.log(encodedlogin);
            var result = StateService.getMyStates(encodedlogin);
            result.success(getStatesSuccess).error(getStatesError);
        }

        function getStatesSuccess(success) {
            console.log("success");
            $scope.allStates = success;
            console.log($scope.allStates);
        }

        function getStatesError(error) {
            console.log("error");
            $scope.error = error;
        }

        $scope.expressFeelings = function(){
            $state.go('app.state1');
        };
    }
]);