class CalcularCadena {
    optenerNumeros(cadena)
    {
        let numeros=[];
        let numero=0;
        for(let i=0;i<cadena.length;i++)
        {
            let caracter=cadena.charAt(i);
            console.log("fuera del while ",numero)
            while((!isNaN(caracter) && caracter !== " " && i<cadena.length))
            {
                numero=numero*10+Number(caracter);
                i++;
                caracter=cadena.charAt(i)
                console.log("hola", numero, Number(caracter))
            }
            numeros.push(numero)
            numero=0;
        }
        return numeros;
    }
  calcularCadena(cadena) {
    let suma=0;
    let numeros=this.optenerNumeros(cadena);
    for(let i=0;i<numeros.length;i++)
    {
        if(numeros[i]<=1000)
        {
            suma=suma+numeros[i]
        }
    }
    return suma;
  }
}

export default CalcularCadena;
