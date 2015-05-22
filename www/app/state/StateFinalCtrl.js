angular.module('starter.StateCtrl').controller('StateFinalCtrl', ['$scope', '$state', 'StateService', 'localStorageService',
    function($scope, $state, StateService, localStorageService) {
        console.log('into StateFinalCtrl');
        // $scope.allStates = [];
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
    }
]);