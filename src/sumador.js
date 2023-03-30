function calculadora(cadena) {
  var resultado = 0;//nombre de variable no muy clara
  
  if(cadena === ""){
    resultado = 0; //nombre de variable
  }
  else if(cadena.search(",") != -1 || cadena.search("-") != -1) {
    const cadenaArray = cadena.split(/[,-]+/);
    resultado = splitAdd(cadena, "");
  } else if(cadena[0]=== "/"){
    resultado = get_separator(cadena);
  }else resultado = parseInt(cadena);

  return resultado;
}

function get_separator(cadena){
  var cadenaArray;
  cadenaArray = cadena.split(/[[\n ]+/);
  return splitAdd(cadenaArray[2], cadenaArray[1].slice(0,-1));
}

function splitAdd(cadena, separador){
  var resultado = 0;
  var cadenaArray;
  if(separador === ""){
    cadenaArray = cadena.split(/[,-]+/);
  }else cadenaArray = cadena.replaceAll(separador, ',').split(/[,-]+/)
  {
    for(var i = 0; i < cadenaArray.length ; i++){
      resultado = resultado + parseInt(cadenaArray[i]);
    }
    return resultado;
  }
}

export default calculadora;
