import { throttle } from "../src/package/throttle";
import { sleep } from "../src/package/sleep";

test("throttle", async () => {
  const func = i => {
    console.log(i);
  };

  let f = throttle(func, 300);
  for (let i = 0; i < 10; i++) {
    f(i);
  }
  sleep(1000);
});
