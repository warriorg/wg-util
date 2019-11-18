
import { randomStr } from "../src/package/strings";

test("encodeParam", () => {
  expect(randomStr(10).length).toBe(10);
});
