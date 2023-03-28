function calculadora(texto) {
  if(texto=="")
   return 0;
  let numeros = texto.split(",");
  if(numeros.length==1){
    return parseInt(texto);
  }
  else{
    var sumando=0;
    for(var i=0;i<numeros.length;i++){
      sumando=sumando+parseInt(numeros[i]);
    }
  }
  
  return sumando;
}

export default calculadora;
