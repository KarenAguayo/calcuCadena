function calculadora(texto) {
  if(texto=="")
   return 0;
  let numeros = texto.split(",");
  if(numeros.length==1){
    return parseInt(texto);
  }
  else{
   let num1 = parseInt(numeros[0]);
   let num2 = parseInt(numeros[1]);
   var sumando = num1 + num2;
  }
  
  return sumando;
}

export default calculadora;
