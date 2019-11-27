import { debounce } from "../src/package/debounce";
import { sleep } from "../src/package/sleep";

test("debounce", async () => {
  const func = i => {
    console.log("aaaaa" + i);
  };
  let f = debounce(func, 300);
  for (let i = 0; i < 10; i++) {
    f(i);
  }
  await sleep(1000);
});
