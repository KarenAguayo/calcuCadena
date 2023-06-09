import calculadoraDeCadenas from "./sumador.js";

describe("calculadora", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadoraDeCadenas("")).toEqual(0);
  });
  it("deberia retornar el mismo numero para una cadena de un numero", () => {
    expect(calculadoraDeCadenas("1")).toEqual(1);
  });
  it("deberia retornar la suma delimitada por , de una cadena", () => {
    expect(calculadoraDeCadenas("1,2")).toEqual(3);
  });
  it("deberia retornar la suma delimitada por , de una cadena de mas de dos numeros", () => {
    expect(calculadoraDeCadenas("1,2,6,4")).toEqual(13);
  });
  it("deberia retornar la suma delimitada por , de una cadena de mas de dos numeros", () => {
    expect(calculadoraDeCadenas("1,2,6,4")).toEqual(13);
  });
  it("deberia retornar la suma delimitada por - de dos numeros", () => {
    expect(calculadoraDeCadenas("6-4")).toEqual(10);
  });
  it("deberia retornar la suma delimitada por - de dos numeros", () => {
    expect(calculadoraDeCadenas("6-4-8")).toEqual(18);
  });
  it("deberia retornar la suma delimitada por -, de cadena de numeros", () => {
    expect(calculadoraDeCadenas("2,8-10")).toEqual(20);
  });
});
