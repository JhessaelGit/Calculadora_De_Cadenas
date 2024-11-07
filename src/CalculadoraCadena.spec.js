import calcularCadena from "./CalculadoraCadena";

const calculadora = new calcularCadena();

describe("Calculadora de cadenas", () => {
  it("deberia calcular la suma de los caracteres", () => {
    expect(calculadora.calcularCadena("1,2,3")).toEqual(0);
  });
});