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
  it("deberia retornar la suma delimitada por , de una cadena de mas de dos numeros", () => {
    expect(calculadora("1,2,6,4")).toEqual(13);
  });
  it("deberia retornar la suma delimitada por , de una cadena de mas de dos numeros", () => {
    expect(calculadora("1,2,6,4")).toEqual(13);
  });
  it("deberia retornar la suma delimitada por - de dos numeros", () => {
    expect(calculadora("6-4")).toEqual(10);
  });
  it("deberia retornar la suma delimitada por - de dos numeros", () => {
    expect(calculadora("6-4-8")).toEqual(18);
  });
});
