import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProduct from '../AllProduct/AllProduct';

const SingleProduct = () => {
  const single = useLoaderData()
  console.log(single)


  return (
    <div>
    </div>
  );

};

export default SingleProduct;