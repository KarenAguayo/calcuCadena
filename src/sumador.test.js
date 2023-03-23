import calculadora from "./sumador.js";

describe("calculadora", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadora()).toEqual(0);
  });
});
