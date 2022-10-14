
function reject(array,callback){
   
    for (let index = 0; index < array.length; index++) {
        
      
  const map1 = array.map((num, index) => {
    if (index < 2) {
      return num;
    }
  });
  callback(map1);
   
  }}
  reject([1,2,3,4],console.log);