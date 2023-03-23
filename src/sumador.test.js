import calculadora from "./sumador.js";

describe("calculadora", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia retornar el mismo numero para una cadena de un numero", () => {
    expect(calculadora("1")).toEqual(1);
  });
  it("deberia retornar la suma delimitada por , de una cadena", () => {
    expect(calculadora("1,2")).toEqual(3);
  });
});
