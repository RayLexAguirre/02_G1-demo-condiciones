import App from "../src/main";

test("esPositivo(10): equal 1", () => {
  let myApp = new App();
  expect(myApp.esPositivo(10).toFixed(2)).toBe((1).toFixed(2));
});

test("esPositivo(-10): equal -1", () => {
  let myApp = new App();
  expect(myApp.esPositivo(-10).toFixed(2)).toBe((-1).toFixed(2));
});

test("esPositivo(0): equal 0", () => {
  let myApp = new App();
  expect(myApp.esPositivo(0).toFixed(2)).toBe((0).toFixed(2));
});