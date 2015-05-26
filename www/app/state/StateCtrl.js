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
            var result = StateService.getMyStates(encodedlogin);
            result.success(getStatesSuccess).error(getStatesError);
            $state.reload();
        }

        function getStatesSuccess(success) {
            $scope.allStates = success;
            console.log($scope.allStates);
        }

        function getStatesError(error) {
            $scope.error = error;
        }

        $scope.expressFeelings = function(){
            $state.go('app.state1');
        };
    }
]);