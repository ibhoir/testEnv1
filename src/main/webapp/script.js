var env = {};

// Import variables if present (from env.js)
if(window){  
  Object.assign(env, window.__env);
}

var module = angular.module('angularApp', [ ]);

module.constant('__env', env);


module.controller('HelloController', function($scope ,$location) {
    $scope.welcomeMessage = 'Hello, world!' +" "+ __env.apiUrl;
	var hostname = $location.host();
	hostname = hostname.substring(hostname.indexOf("-"),hostname.length);
	$scope.host = hostname;
	$scope.url = $location.protocol() + '://'+ $location.host() +':'+  $location.port(); 
});

