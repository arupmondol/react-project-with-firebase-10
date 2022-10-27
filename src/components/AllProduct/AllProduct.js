import React from 'react';

const AllProduct = ({data}) => {
  const {name, img} = data;
  
  console.log(data)
  return (
    <div>
     
      <img src={img} alt=""/>
    {name}
      
      
    </div>
  );
};

export default AllProduct;