angular.module('stomperServices', []).
    factory('StompClient', function(){
        WebSocketStompMock = SockJS;
        var client = Stomp.client('http://127.0.0.1:55674/stomp');
        client.debug = function(e) {
            console.debug(e);
        }
        return client;
    });