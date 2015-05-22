angular.module('starter.StateCtrl').controller('State3Ctrl', ['$scope', '$state', 'StateService', 'localStorageService',
    function($scope, $state, StateService, localStorageService) {
        console.log('into State3Ctrl');

        $scope.allStates = [];
        $scope.message = "";
        $scope.input = {};

        var encodedlogin = "";
        var feeling = "";
        var catid = "";

        getLocalStorage();

        function getLocalStorage() {
            console.log("into getLocalStorage");
            
            encodedlogin = localStorageService.get("ls-encoded");
            feeling = localStorageService.get("ls-feeling");
            catid = localStorageService.get("ls-catid");
            
            //IMPORTANT include some random messages in the api
            if(feeling=='up'){
                $scope.message="Glad to hear you are doing well! You can talk to me about anything.";
            }
            if(feeling=='down'){
                $scope.message="Sorry to hear you're having a bad moment, talking about it might make you feel a little better.";
            }
            
            console.log("ls-feeling",feeling);
            

        }

        function loadStates() {
            var result = StateService.getStates();
            result.success(getStatesSuccess).error(getStatesError);
        }

        function getStatesSuccess(success) {
            $scope.allStates = success;
            console.log($scope.allStates);
        }

        function getStatesError(error) {
            $scope.error = error;
        }

        function createStateSuccess(success){
            $scope.success = success;
            $scope.submitSuccess = true;
            $state.go('app.statefinal');
        }

        function createStateError(error){
            $scope.error = error;
        }

        $scope.postState = function(isValid){
            console.log("postState");
            
            if(isValid){
                console.log($scope.input.text);
                var result = StateService.postTextState(encodedlogin,$scope.input.text,catid);
                result.success(createStateSuccess).error(createStateError);
            }
            
        };
    }
]);