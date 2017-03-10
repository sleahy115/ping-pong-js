var Calculator = require('./../js/scripts.js').calculatorModule;

$(document).ready(function() {
    $('.ping-pong').submit(function(event) {
        event.preventDefault();
        var newCalculator = new Caluclator("hot pink");
        var number = $("#number").val();
        var output = newCalculator.pingPong(number);
        output.forEach(function(element) {
            $('#solution').append("<li>" + element + "</li>");
        });
    });
});
