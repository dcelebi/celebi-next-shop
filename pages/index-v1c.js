// Option 1: fetch products on the server side (in getStaticProps)
import Head from 'next/head';
import Title from '../components/Title';
import { getProducts } from '../lib/products';


// const  products = [
//     { id: 1, title: 'First product'},
//     { id: 2, title: 'Second product'},
//   ]

  export async function getServerSideProps(){
    console.log('[HomePage] getServerSideProps()');    
    const products = await getProducts();

    return { props: {products} };
  }



function HomePage({ products }) {
  console.log('[HomePage] render:', products)
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
          {product.title}
        </li>
      ))}
    </ul>
    </main>
   </>
  );
};

export default  HomePage;