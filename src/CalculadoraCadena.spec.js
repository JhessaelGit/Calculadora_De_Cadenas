import calcularCadena from "./CalculadoraCadena";

const calculadora = new calcularCadena();

describe("Calculadora de cadenas", () => {
  it("deberia calcular la suma de los caracteres 1,2,3", () => {
    expect(calculadora.calcularCadena("1,2,3")).toEqual(6);
  });
  it("deberia calcular la suma de los caracteres 2,2,3", () => {
    expect(calculadora.calcularCadena("2,2,3")).toEqual(7);
  });
  it("deberia calcular la suma de los caracteres 1,2,4,8", () => {
    expect(calculadora.calcularCadena("1,2,4,8")).toEqual(15);
  });
  it("deberia calcular la suma de los caracteres 1-2,3", () => {
    expect(calculadora.calcularCadena("1-2,3")).toEqual(6);
  });
  it("deberia calcular la suma de los caracteres //[;] 6;7;4", () => {
    expect(calculadora.calcularCadena("[;] 6;7;4")).toEqual(17);
  });
  it("deberia calcular la suma de los caracteres //[;] 6,3-2;1", () => {
    expect(calculadora.calcularCadena("//[;] 6,3-2;1")).toEqual(12);
  });
  it("deberia Ignorar los numeros mayores a 1000 y retornar 2", () => {
    expect(calculadora.calcularCadena("2,1001")).toEqual(2);
  });
});