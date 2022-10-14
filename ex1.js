function sendMessage(message,callback){
    callback(message);
}

sendMessage("hello",console.log);
sendMessage("hello",alert);
sendMessage("hello",prompt);
sendMessage("hello",confirm);



