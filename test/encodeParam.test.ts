import encodeParam from "../src/package/encodeParam";

test("encodeParam", () => {
  expect(encodeParam({ a: "b" })).toBe("a=b");
  expect(encodeParam({ a: "b", c: "d" })).toBe("a=b&c=d");
});
