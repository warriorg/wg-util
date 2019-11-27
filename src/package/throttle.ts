
export function throttle<T extends (...args: any[]) => void>(fn: T, wait: number = 0): T {
  if (wait === 0) {
    return fn;
  }

  let timeout: number | undefined;

  return ((...args: any[]) => {
    const later = () => {
      timeout = undefined;
      
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait) as any;
  }) as T;
}

