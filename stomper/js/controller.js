function LoginCtrl($scope, $rootScope, $location, StompClient) {
//    Default values:
//    $scope.login = {
//        username : "tbo@cybo.biz",
//        password : "pass"
//    }
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

    // Incoming messages...
    StompClient.subscribe("/topic/test", function(d) {
        $scope.messageBuffer += "<span class='timestamp'>[ " + (new Date).toLocaleTimeString() + " ]</span> " + d.body + "<br>" ;
        $scope.$apply();
        window.scrollTo(0, document.body.scrollHeight);
    });

    $scope.sendMessage = function($event) {
        if($scope.message) {
            $scope.send($scope.message)
            $event.preventDefault();
            $scope.message = "";
        }
    };

    // Send a message via stomp
    $scope.send = function(message) {
        StompClient.send('/topic/test', {}, message);
    }

    // First broadcast to all users
    $scope.send("<b>" + $rootScope.username + " joined the chat</b>");
}