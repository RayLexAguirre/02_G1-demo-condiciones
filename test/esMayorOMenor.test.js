import App from "../src/main";

test("esMayorOMenor(20): to equal Es mayor de edad", () => {
  let myApp = new App();
  expect(myApp.esMayorOMenor(20).toUpperCase()).toBe(("Es mayor de edad").toUpperCase());
});

test("esMayorOMenor(15): to equal Es menor de edad", () => {
  let myApp = new App();
  expect(myApp.esMayorOMenor(15).toUpperCase()).toBe(("Es menor de edad").toUpperCase());
});
