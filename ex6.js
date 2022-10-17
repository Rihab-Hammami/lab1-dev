function randomGame(){
    let i=0;
    let id=setInterval(()=>{
    let r=Math.random();
     i++;
    if(r>0.75){
    console.log("Nombre d'essais effectué pour trouver un nombre aléatoire supérieur à 0.75 : "+i);
    clearInterval(id);
    } 
},1000);
}
randomGame();
