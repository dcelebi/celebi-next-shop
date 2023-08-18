function stripProduct(product) {
  return {
    id: product.id,
    title: product.attributes.title,
  };
}

export async function getProducts() {
  const response = await fetch("http://localhost:1337/api/products");
  const products = await response.json();
  //console.log(response);
  //console.log(products);
  return products.data.map(stripProduct);
}
