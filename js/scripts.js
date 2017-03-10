function pingPong(number) {
    var output = [];
    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            output.push("ping-pong");
        } else if (i % 3 === 0) {
            output.push("ping");
        } else if (i % 5 === 0) {
            output.push("pong");
        } else {
            output.push(i);
        }
    }
    return output;

}


$(document).ready(function() {
    $('.ping-pong').submit(function(event) {
        event.preventDefault();
        var number = $("#number").val();
        var output = pingPong(number);
        output.forEach(function(element) {
            $('#solution').append("<li>" + element + "</li>");
        });
    });
});
