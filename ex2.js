function each(array,callback){
    for (let i = 0; i < array.length; i++) {
        let element = array[i]*2;
        callback(element);
        
    }
}
each( [1,2,3,4],console.log);
