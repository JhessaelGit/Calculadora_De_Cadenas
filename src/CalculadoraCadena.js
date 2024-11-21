class CalcularCadena {
    optenerArrayDeNumerosDeUnaCadena(cadena)
    {
        let ArrayNumeros=[];
        let numeroOptenido=0;
        for(let i=0;i<cadena.length;i++)
        {
            let caracter=cadena.charAt(i);
            console.log("fuera del while ",numeroOptenido)
            while((!isNaN(caracter) && caracter !== " " && i<cadena.length))
            {
                numeroOptenido=numeroOptenido*10+Number(caracter);
                i++;
                caracter=cadena.charAt(i)
                console.log("hola", numeroOptenido, Number(caracter))
            }
            ArrayNumeros.push(numeroOptenido)
            numeroOptenido=0;
        }
        return ArrayNumeros;
    }
  calcularSumaDeNumerosEnLaCadena(cadena) {
    let suma=0;
    let ArrayNumerosDeLaCadena=this.optenerArrayDeNumerosDeUnaCadena(cadena);
    for(let i=0;i<ArrayNumerosDeLaCadena.length;i++)
    {
        if(ArrayNumerosDeLaCadena[i]<=1000)
        {
            suma=suma+ArrayNumerosDeLaCadena[i]
        }
    }
    return suma;
  }
}

export default CalcularCadena;
