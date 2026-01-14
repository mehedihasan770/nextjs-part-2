export const FetchItems = async () => {
  const res = await fetch('https://my-next-js-server.vercel.app/product');
  return res.json();
};

export const FetchItemsId = async (id) => {
  const res = await fetch(`https://my-next-js-server.vercel.app/product?id=${id}`);
  return res.json();
};