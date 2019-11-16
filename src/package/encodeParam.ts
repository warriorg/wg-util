const encodeParam = param => {
  return Object.keys(param)
    .filter(key => param[key])
    .map(key => [key, param[key]].map(encodeURIComponent).join("="))
    .join("&");
};
export default encodeParam;
