angular.module('starter.NotificationService', []).factory('NotificationService', ['$http', '$q', '$base64', 'apiUrl',
    function($http, $q, $base64, apiUrl) {
        return {
            getNotifcations: getNotifcations
        };

        function getNotifcations($encodedLogin) {
            console.log("into Service getStates");
            console.log("apiUrl", apiUrl);
            
            var request = $http({
                method: "get",
                url: apiUrl + "/notifications",
                headers: {
                    'Authorization': 'Basic ' + $encodedLogin
                }
            });
            return request;
        }
    }
]);