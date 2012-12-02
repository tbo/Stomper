angular.module('stomper', ['stomperServices','ui']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: 'templates/login.html',   controller: LoginCtrl}).
            when('/chat', {templateUrl: 'templates/chat.html',   controller: ChatCtrl}).
            otherwise({redirectTo: '/login'});
    }]).run( function($rootScope, $location) {
        // register listener to watch route changes
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            if (! $rootScope.authenticated) {
                // no logged user, we should be going to #login
                if ( next.templateUrl == "templates/login.html" ) {
                    // already going to #login, no redirect needed
                } else {
                    // not going to #login, we should redirect now
                    $location.path( "/login" );
                }
            }
        });
    });