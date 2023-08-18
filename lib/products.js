import axios from "axios";
import useSWR from 'swr';



function stripProduct(product) {
  return {
    id: product.id,
    title: product.attributes.title,
  };
}

export async function getProduct(id){
  const response = await fetch(`http://localhost:1337/api/products/${id}`);
  const product = await response.json();
  return stripProduct(product);
}

export async function getProducts() {
  
  const response = await fetch("http://localhost:1337/api/products");
  const products = await response.json();
  //console.log(response);
  //console.log(products);
  return products.data.map(stripProduct);
}
