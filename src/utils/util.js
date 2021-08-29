export const checkUrl = (url) => {
  const arr = url.split("/");
  const lastItem = arr[arr.length - 1];
  return lastItem;
};