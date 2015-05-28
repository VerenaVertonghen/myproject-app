angular.module('starter.StateCtrl').controller('StateFinalCtrl', ['$scope', '$state','$ionicHistory', 'StateService', 'localStorageService',
    function($scope, $state, $ionicHistory, StateService, localStorageService) {
        console.log('into StateFinalCtrl');

        // $state.reload();

        var encodedlogin = "";
        var feeling = "";
        var catid = "";
        var stateid = "";

        $scope.state = [];

        getLocalStorage();
        //$ionicHistory.clearHistory();

        function getLocalStorage() {
            encodedlogin = localStorageService.get("ls-encoded");
            feeling = localStorageService.get("ls-feeling");
            catid = localStorageService.get("ls-catid");
            stateid = localStorageService.get("ls-stateid");

            loadState();
            
            // //IMPORTANT include some random messages in the api
            // if(feeling=='up'){
            //     $scope.message="Glad to hear you are doing well! You can talk to me about anything.";
            // }
            // if(feeling=='down'){
            //     $scope.message="Sorry to hear you're having a bad moment, talking about it might make you feel a little better.";
            // }
        }

        function loadState() {
            var result = StateService.getMyState(encodedlogin,stateid);
            result.success(getStateSuccess).error(getStateError);
        }

        function getStateSuccess(success) {
            $scope.state = success;
            console.log($scope.state);

   			//$state.transitionTo($state.current, $state.$current.params, {
			//     reload: true,
			//     inherit: false,
			//     notify: true
			// });

            //$state.reload();
           // $route.reload();
        }

        function getStateError(error) {
            $scope.error = error;
        }

        $scope.toExpressions = function(){
        	$state.go('app.states');
    	}
    }
]);