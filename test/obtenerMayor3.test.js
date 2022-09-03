import App from "../src/main";

test("obtenerMayor3(3, 2, 1): equal 3", () => {
  let myApp = new App();
  expect(myApp.obtenerMayor3(3, 2, 1).toFixed(2)).toBe((3).toFixed(2));
});

test("obtenerMayor3(2, 3, 1): equal 3", () => {
  let myApp = new App();
  expect(myApp.obtenerMayor3(2, 3, 1).toFixed(2)).toBe((3).toFixed(2));
});

test("obtenerMayor3(2, 1, 3): equal 3", () => {
  let myApp = new App();
  expect(myApp.obtenerMayor3(2, 1, 3).toFixed(2)).toBe((3).toFixed(2));
});
