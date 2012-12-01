window.onload = function () {
    WebSocketStompMock = SockJS;

    var client = Stomp.client('http://127.0.0.1:55674/stomp');
    client.debug = function(e) {
        console.debug(e);
    }

//    setTimeout(function() {
//        client.send('/topic/test', {}, "hallo");
//    },3000);

    client.connect('tbo@cybo.biz', 'pass', function(x) {
        id = client.subscribe("/topic/test", function(d) {
            console.log(d.body)
        });
    });
}