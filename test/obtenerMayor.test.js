import App from "../src/main";

test("obtenerMayor(10, 20): equal 20", () => {
  let myApp = new App();
  expect(myApp.obtenerMayor(10, 20).toFixed(2)).toBe((20).toFixed(2));
});

test("obtenerMayor(50, 20): equal 50", () => {
  let myApp = new App();
  expect(myApp.obtenerMayor(50, 20).toFixed(2)).toBe((50).toFixed(2));
});
