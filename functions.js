function first(){
  console.log("Primera funcion");
}

function second(callback){
  setTimeout(()=>{
    console.log("Segunda funcion")
    callback();
  },0);

}

function third(){
  console.log("Tercera funcion");
}


//llamando las funciones

first();
second(third);
//third();