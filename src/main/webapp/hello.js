angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://pwdutiltomcat:8080/getData/41').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
