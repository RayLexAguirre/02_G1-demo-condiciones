import App from "../src/main";

test("costoTotal(3, 500) igual a 1500", () => {
  let myApp = new App();
  expect(myApp.costoTotal(3, 500).toFixed(2)).toBe((1500).toFixed(2));
});

test("costoTotal(5, 500) igual a 2125", () => {
  let myApp = new App();
  expect(myApp.costoTotal(5, 500).toFixed(2)).toBe((2125).toFixed(2));
});