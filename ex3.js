function mapp(array,callback){
    
    for (let index = 0; index < array.length; index++) {
        
        const map1 = array.map(index => index * 2);
        callback(map1);
    }
   
}
mapp([1,2,3,4],console.log);