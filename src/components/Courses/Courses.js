import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product'


const Courses = () => {
  const products = useLoaderData()
  console.log(products)
  return (
    <div>
     {
      products.map(product => <Product product={product}></Product> )
     }
    </div>
  );
};

export default Courses;