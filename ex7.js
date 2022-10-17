function inOrder(callback1,callback2){
    callback1
    callback2
}
var logOne=setTimeout(function (){
    console.log("One!");
}, Math.random()*1000);
var logTwo=setTimeout(function (){
    console.log("Two!");
}, Math.random()*1000);
inOrder(logOne,logTwo);