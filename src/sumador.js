function calculadoraDeCadenas(cadena) {
  var resultado = 0;
  
  if(cadena === ""){
    return resultado = 0; 
  }
  if(cadena.search(",") != -1 || cadena.search("-") != -1) {
    return resultado = splitAdd(cadena, "");
  } if(cadena[0]=== "/"){
    return resultado;
  }else return resultado = parseInt(cadena);
}
function splitAdd(cadena, separador){
  var cadenaArray;
  if(separador === ""){
    cadenaArray = cadena.split(/[,-]+/);
  }else cadenaArray = cadena.replaceAll(separador, ',').split(/[,-]+/)
    return sumarCadena(cadenaArray);
}
function sumarCadena (cadenaArray){
  var resultado=0;
  for(var i = 0; i < cadenaArray.length ; i++){
    resultado = resultado + parseInt(cadenaArray[i]);
  }
  return resultado;
}



export default calculadoraDeCadenas;
