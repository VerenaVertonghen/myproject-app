angular.module('starter.NotificationCtrl', []).controller('NotificationCtrl', ['$scope', '$state', 'NotificationService', 'localStorageService',
    function($scope, $state, NotificationService, localStorageService) {
    	console.log('into NotificationCtrl');
        
        $scope.allNotifications = [];
        
        var encodedlogin = "";
        
        getLocalStorage();

        function getLocalStorage() {
            encodedlogin = localStorageService.get("ls-encoded");
            loadNotifications();
        }

        function loadNotifications() {
            var result = UserService.getNotifications(encodedlogin);
            result.success(getNotificationsSuccess).error(getNotificationsError);
        }

        function getNotificationsSuccess(success) {
            $scope.allNotifications = success;
        }

        function getNotificationsError(error) {
            $scope.error = error;
        }
    }
]);