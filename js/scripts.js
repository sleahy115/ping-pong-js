function pingPong(number){
    var output = []
    for(i=0; i<=number; i++){
        if(i % 15 == 0){
            output = "ping-pong";
        }else if (i % 5 == 0) {
            output = "pong";
        }else if (i % 3 == 0) {
            output = "ping"
        }else{
            output = number;
        }
        return output;
    }
}
