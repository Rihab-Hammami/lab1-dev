function inOrder(msg,callback1,callback2){
 callback1(msg);
 callback2(msg);
}
inOrder("hello",console.log);