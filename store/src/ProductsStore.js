const productsArray = [
  {
    id: "// Coffee: price_1M65R0HHymDcgpa79oWjcaXB",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1M65SMHHymDcgpa7H3LaJPop",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "3",
    title: "price_1M65TgHHymDcgpa7euzgG8JL",
    price: 949.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
