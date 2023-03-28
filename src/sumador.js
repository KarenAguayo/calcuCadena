function calculadora(cadena) {
  var sumando=0;
  if(cadena === ""){
    sumando = 0;
  }
  else if(cadena.search(",") != -1 || cadena.search("-") != -1) {
    const cadenaArray = cadena.split(/[,-]+/);
    for(var i = 0; i < cadenaArray.length ; i++){
      sumando = sumando + parseInt(cadenaArray[i]);
    }
  } else sumando = parseInt(cadena);
  return sumando;
}

export default calculadora;
