export const FetchItems = async () => {
  const res = await fetch('https://my-next-js-server.vercel.app/product');
  return res.json();
};
