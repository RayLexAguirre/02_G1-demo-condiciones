import App from "../src/main";

test("descripcion('AA'): equal Infantil", () => {
  let myApp = new App();
  expect(myApp.descripcion("AA").toUpperCase()).toBe(("Infantil").toUpperCase());
});

test("descripcion('A'): equal Todos", () => {
  let myApp = new App();
  expect(myApp.descripcion("A").toUpperCase()).toBe(("Todos").toUpperCase());
});

test("descripcion('B'): equal Adolescentes", () => {
  let myApp = new App();
  expect(myApp.descripcion("B").toUpperCase()).toBe(("Adolescentes").toUpperCase());
});

test("descripcion('C'): equal Adultos", () => {
  let myApp = new App();
  expect(myApp.descripcion("C").toUpperCase()).toBe(("Adultos").toUpperCase());
});

test("descripcion('F'): equal No valido!", () => {
  let myApp = new App();
  expect(myApp.descripcion("F").toUpperCase()).toBe(("No Valido!").toUpperCase());
});