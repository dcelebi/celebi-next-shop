import Head from "next/head";
import Title from '../../components/Title';
import { getProduct, getProducts } from '../../lib/products';
//import { useEffect, useState } from "react";

export async function getStaticPaths(){
    const products = await getProducts();
    console.log(products);
    return {
        paths: products.map((product) => ({ params: {id: product.id.toString()}})),
        fallback: false,
    }
}

export async function getStaticProps({ params: { id} }){
    const product = await getProduct(id);
    return {
        props: { product },
    }
}

function ProductPage() {

  return (
    <>
    <Head>
      <title>Next Shop</title>
    </Head>
    <main className='px-6 py-4'>
      <Title>{product.title}</Title>
    </main>
   </>
  )
}

export default ProductPage;