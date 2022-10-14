function countdown(nbr){
  let n=nbr-1;
  if(nbr>=0){
  console.log(nbr);
  if(nbr===0)
  {console.log("done!")}
  
  setTimeout(() => {
    countdown(n);
  }, 1000);
  
}}
countdown(3);


