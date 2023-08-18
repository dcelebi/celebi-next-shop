
import Head from 'next/head';
import Link from 'next/link';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import { getProducts } from '../lib/products';

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    getProducts().then((products) => setProducts(products));
  },[]);

  //console.log('[HomePage] render:', products)
  return (
   <>
    <Head>
      <title>Next Shop</title>
    </Head>
    <main className='px-6 py-4'>
      <Title>Next Shop</Title>
      
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            {product.title}
          </Link>
        </li>
      ))}
    </ul>
    </main>
   </>
  );
};

export default  HomePage;