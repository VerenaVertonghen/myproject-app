angular.module('starter.UserService', []).factory('UserService', ['$http', '$q', '$base64', 'apiUrl',
    function($http, $q, $base64, apiUrl) {
        return {
            getUser: getUser,
            createUser: createUser,
            updateUserState: updateUserState,
            addStateToUser: addStateToUser
        };

        function getUser($encodedLogin) {
            console.log("into Service getUser");
            console.log("$encodedLogin", $encodedLogin);

            var request = $http({
                method: "get",
                url: apiUrl + "/myprofile",
                headers: {
                    'Authorization': 'Basic ' + $encodedLogin
                }
            });
            return request;
        }

        function addStateToUser($encodedLogin,$stateid) {
            console.log("into Service getMyStates");
            console.log("apiUrl", apiUrl);
            console.log("encodedLogin",$encodedLogin);
            console.log("stateid",$stateid);

            var request = $http({
                method: "post",
                url: apiUrl + "/addstatetouser",
                headers: {
                    'Authorization': 'Basic ' + $encodedLogin
                },
                data: {
                    'state':$stateid
                }
            });
            return request;
        }

        function createUser($email,$firstname,$lastname,$password) {
            console.log("into Service createUser");

            var request = $http({
                method: "post",
                url: apiUrl + "/signup",
                data: { 
                    "firstname": $firstname,
                    "lastname": $lastname,
                    "password": $password,
                    "email": $email
                }
            });
            return request;
        }

        function updateUserState($encodedLogin,$stateid) {
            console.log("into Service createUser");
            console.log("$encodedLogin",$encodedLogin);
            console.log("$stateid",$stateid);

            var request = $http({
                method: "put",
                url: apiUrl + "/updateprofile",
                headers: {
                    'Authorization': 'Basic ' + $encodedLogin
                },
                data: { 
                    "state": $stateid
                }
            });
            return request;
        }
    }
]);