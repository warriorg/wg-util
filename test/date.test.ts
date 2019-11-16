import { dateFormat } from "../src/package/date";

test("dateFormat", () => {
  expect(dateFormat(new Date(2016, 6, 20), "yyyy-MM-dd")).toBe("2016-07-20");
});
