import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product'
import './Courses.css'


const Courses = () => {
  const products = useLoaderData()
  console.log(products)
  return (
    <div className='courses'>
     {
      products.map(product => <Product product={product}></Product> )
     }
    </div>
  );
};

export default Courses;