import App from "../src/main";

test("queToca(9): equal A desayunar!", () => {
  let myApp = new App();
  expect(myApp.queToca(9).toUpperCase()).toBe(("A desayunar!").toUpperCase());
});

test("queToca(11): equal A almorzar!", () => {
  let myApp = new App();
  expect(myApp.queToca(11).toUpperCase()).toBe(("A almorzar!").toUpperCase());
});

test("queToca(14): equal A comer!", () => {
  let myApp = new App();
  expect(myApp.queToca(14).toUpperCase()).toBe(("A comer!").toUpperCase());
});

test("queToca(20): equal A cenar!", () => {
  let myApp = new App();
  expect(myApp.queToca(20).toUpperCase()).toBe(("A cenar!").toUpperCase());
});

test("queToca(23): equal A dormir!", () => {
  let myApp = new App();
  expect(myApp.queToca(23).toUpperCase()).toBe(("A dormir!").toUpperCase());
});