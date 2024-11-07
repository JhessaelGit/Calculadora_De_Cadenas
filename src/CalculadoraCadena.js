class CalcularCadena {
  calcularCadena(cadena) {
    let suma = 0;
    let tamanioCadena=cadena.length
    for (let i = 0; i <= tamanioCadena; i++) {
      let caracter = cadena.charAt(i);
      if (!isNaN(caracter) && caracter !== " ") {
        suma = suma + Number(caracter);
      }
    }
    return suma;
  }
}

export default CalcularCadena;
