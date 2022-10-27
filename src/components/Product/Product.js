import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './Product.css'

const Product = ({product}) => {




  const {name, img, id} = product;
  console.log(product)
  return (
    <div className='product'>
      <div className='btn-div'>
     {/* <Link><Button>{name}</Button></Link> */}
      </div>
    <div className='card-div'>
       <Card style={{ width: '18rem' }}>
      <img src={img} alt=""/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
       <Link to={`/Product/${id}`}><button className='btn-primary'>About Course</button></Link>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
};

export default Product;