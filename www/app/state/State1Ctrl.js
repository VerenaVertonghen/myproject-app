angular.module('starter.StateCtrl').controller('State1Ctrl', ['$scope', '$state', 'StateService', 'localStorageService',
    function($scope, $state, StateService, localStorageService) {
        console.log('into State1Ctrl');
        
        $scope.allStates = [];
        
        // loadStates();

        // function loadStates() {
        //     var result = StateService.getStates();
        //     result.success(getStatesSuccess).error(getStatesError);
        // }

        // function getStatesSuccess(success) {
        //     $scope.allStates = success;
        //     console.log($scope.allStates);
        // }

        // function getStatesError(error) {
        //     $scope.error = error;
        // }

        $scope.nextStep = function(feeling){
            console.log("nextStep");
            console.log("feeling",feeling);
            localStorageService.set("ls-feeling", feeling);
            $state.go('app.state2');
        };
    }
]);