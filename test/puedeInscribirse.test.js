import App from "../src/main";

test("puedeInscribirse(20, true, false): equal true", () => {
  let myApp = new App();
  expect(myApp.puedeInscribirse(20, true, false)).toBe(true);
});

test("puedeInscribirse(15, true, false): equal false", () => {
  let myApp = new App();
  expect(myApp.puedeInscribirse(15, true, false)).toBe(false);
});

test("puedeInscribirse(20, false, false): equal false", () => {
  let myApp = new App();
  expect(myApp.puedeInscribirse(20, false, false)).toBe(false);
});

test("puedeInscribirse(20, false, true): equal true", () => {
  let myApp = new App();
  expect(myApp.puedeInscribirse(20, false, true)).toBe(true);
});