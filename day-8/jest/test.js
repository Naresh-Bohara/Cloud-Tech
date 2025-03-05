const { sum } = require("./index");

test("properly adds two numbers", () => {
    expect(sum(2, 1)).toBe(3);
});
