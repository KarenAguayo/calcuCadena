import calculadora from "./sumador.js";

describe("calculadora", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia retornar el mismo numero para una cadena de un numero", () => {
    expect(calculadora("1")).toEqual(1);
  });
});
