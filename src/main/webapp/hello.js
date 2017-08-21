angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('https://pwdutiltomcat-cposs-dev.eps-nonprd.corp.cox.com/getData/41').
        then(function(response) {
            $scope.greeting = response.data;
        });
});