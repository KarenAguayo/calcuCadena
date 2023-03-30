function calculadoraDeCadenas(cadena) {
  var resultado = 0;
  
  if(cadena === ""){
    return resultado = 0; 
  }
  if(cadena.search(",") != -1 || cadena.search("-") != -1) {
    const cadenaArray = cadena.split(/[,-]+/);
    return resultado = splitAdd(cadena, "");
  } if(cadena[0]=== "/"){
    return resultado = get_separator(cadena);
  }else return resultado = parseInt(cadena);
}

function get_separator(cadena){
  var cadenaArray;
  cadenaArray = cadena.split(/[[\n ]+/);
  return splitAdd(cadenaArray[2], cadenaArray[1].slice(0,-1));
}

function splitAdd(cadena, separador){
  var cadenaArray;
  if(separador === ""){
    cadenaArray = cadena.split(/[,-]+/);
  }else cadenaArray = cadena.replaceAll(separador, ',').split(/[,-]+/)
  {
    return sumarCadena(cadenaArray);
  }
}
function sumarCadena (cadenaArray){
  var resultado=0;
  for(var i = 0; i < cadenaArray.length ; i++){
    resultado = resultado + parseInt(cadenaArray[i]);
  }
  return resultado;
}



export default calculadoraDeCadenas;
