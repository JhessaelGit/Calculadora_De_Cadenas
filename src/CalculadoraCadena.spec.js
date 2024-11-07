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
  
});