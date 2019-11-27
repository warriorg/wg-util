
import { throttle } from '../src/package/throttle';

test("throttle", async () => {
    const func = (i) => {
        console.log(i)
    }

    let f = throttle(func, 300)
    for (let i = 0; i < 10; i++) {
        f(i)
    }
});
