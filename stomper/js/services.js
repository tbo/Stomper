angular.module('stomperServices', []).
    factory('StompClient', function(){
        // Connect to the sockjs service
        WebSocketStompMock = SockJS;
        var client = Stomp.client('http://192.168.78.73:55674/stomp');
        client.debug = function(e) {
            // Uncomment for debug messages
            //console.debug(e);
        }
        return client;
    });