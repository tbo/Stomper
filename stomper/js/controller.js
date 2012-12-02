function LoginCtrl($scope, $rootScope, $location, StompClient) {
    $scope.login = {
        username : "tbo@cybo.biz",
        password : "pass"
    }
    $scope.signin = function() {
        StompClient.connect($scope.login.username, $scope.login.password, function(x) {
            $rootScope.authenticated = true;
            $rootScope.username = $scope.login.username;
            $location.path( "/chat" );
            $scope.$apply();
        });
    }
}

function ChatCtrl($scope,$rootScope, StompClient) {
    $scope.messageBuffer = "";
    StompClient.subscribe("/topic/test", function(d) {
        $scope.messageBuffer += d.body + "<br>" ;
        $scope.$apply();
    });
    $scope.sendMessage = function($event) {
        if($scope.message) {
            $scope.send($scope.message)
            $event.preventDefault();
            $scope.message = "";
        }
    };
    $scope.send = function(message) {
        StompClient.send('/topic/test', {}, "<span class='timestamp'>[ " + (new Date).toLocaleTimeString() + " ]</span> " + message);
    }
    $scope.send("<b>" + $rootScope.username + " joined the chat</b>");
}