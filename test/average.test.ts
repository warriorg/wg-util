import average from "../src/package/average";

test("average", () => {
  expect(average(1, 2, 3)).toBe(2);
});
