import { typeOf } from "../src/package/objects";

test("typeOf", () => {
  expect(typeOf({ a: "b" })).toBe("object");
});
