angular.module('starter.StateCtrl').controller('State2Ctrl', ['$scope', '$state', 'StateService', 'CategoryService','UserService', 'localStorageService',
    function($scope, $state, StateService, CategoryService, UserService, localStorageService) {
        console.log('into State2Ctrl');
        
        $scope.allCategories = [];
        $scope.showup = false;
        $scope.showdown = false;
        $scope.submitSuccess = false;

        $scope.categoryid = {

        };
        
        var encodedlogin = "";
        var feeling = "";
        var catid = "";
        var stateid = "";

        getLocalStorage();

        function getLocalStorage() {
            console.log("into getLocalStorage");
            
            encodedlogin = localStorageService.get("ls-encoded");
            feeling = localStorageService.get("ls-feeling");
            
            
            console.log("ls-feeling",feeling);
            loadCategories();

        }

        function updateUser() {
            console.log(encodedlogin);
            var result = UserService.updateUserState(encodedlogin,stateid);
            result.success(updateUserSuccess).error(updateUserError);
        }

        function updateUserSuccess(success) {
            console.log("success");
            $scope.state = success;
            console.log($scope.state);
            $state.go('app.statefinal');
        }

        function updateUserError(error) {
            console.log("error");
            $scope.error = error;
        }

        function loadCategories() {
            console.log("into loadCategories");
            var result = CategoryService.getCategories(encodedlogin,feeling);
            result.success(getCategoriesSuccess).error(getCategoriesError);
            if(feeling == 'up'){
                $scope.showup = true;
                $scope.showdown = false;
            }
            if(feeling == 'down'){
                $scope.showdown = true;
                $scope.showup = false;
            }
        }

        function getCategoriesSuccess(success) {
            $scope.allCategories = success;
            console.log($scope.allCategories);
        }

        function getCategoriesError(error) {
            $scope.error = error;
        }

        function createStateSuccess(success){
            $scope.success = success;
            $scope.submitSuccess = true;
            console.log("$scope.success",$scope.success);
            stateid = $scope.success._id;
            updateUser();
            
        }

        function createStateError(error){
            $scope.error = error;
        }

        $scope.postState = function(){
            console.log("postState");
            console.log("categoryid",$scope.categoryid);
            console.log("categoryid.id",$scope.categoryid.id);
            if($scope.categoryid.id){
                var result = StateService.postState(encodedlogin,$scope.categoryid.id);
                result.success(createStateSuccess).error(createStateError);
            }else{
                alert("You have not selected a feeling.");
            }
            
        };

        $scope.nextStep = function(){
            if($scope.categoryid.id){
                catid = localStorageService.set("ls-catid", $scope.categoryid.id);
                $state.go('app.state3');
            }else{
                alert("You have not selected a feeling.");
            }
            
        };
    }
]);