function LoginCtrl($scope, $location, StompClient) {
    $scope.login = function() {
        StompClient.connect($scope.login.username, $scope.login.password, function(x) {
            $location.path( "/chat" );
            $scope.$apply();
            StompClient.subscribe("/topic/test", function(d) {
                chat.messageBuffer = d.body;
            });

        });
    }
}

function ChatCtrl($scope) {
}