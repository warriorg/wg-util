export const preloadScript = src => {
  if (document.querySelector('link[href="' + src + '"]')) {
    return;
  }

  const el = document.createElement("link");
  el.href = src;
  el.rel = "preload";
  el.as = "script";
  el.crossOrigin = "anonymous";
  document.head.appendChild(el);
};

export const loadScript = src => {
  return new Promise(function(resolve, reject) {
    if (document.querySelector('script[src="' + src + '"]')) {
      resolve();
      return;
    }

    const el = document.createElement("script");

    el.type = "text/javascript";
    el.async = true;
    el.src = src;

    el.addEventListener("load", resolve);
    el.addEventListener("error", () => {
      reject();
    });
    el.addEventListener("abort", () => {
      reject();
    });

    document.head.appendChild(el);
  });
};
