angular.module('stomper', ['stomperServices']).
    config(['$routeProvider', function($routeProvider) {
//    setTimeout(function() {
//        client.send('/topic/test', {}, "hallo");
//    },3000);
        $routeProvider.
            when('/login', {templateUrl: 'templates/login.html',   controller: LoginCtrl}).
            when('/chat', {templateUrl: 'templates/chat.html',   controller: ChatCtrl}).
            otherwise({redirectTo: '/login'});
    }]);