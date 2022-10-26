import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [categories, setCategories] = useState([])
  useEffect(() =>{
    fetch('https://assingment10-auth-server.vercel.app/product-categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])
  return (
    <div>
      <h4>all categry:{categories.length}</h4>
      {categories.name}
      
    </div>
  );
};

export default Home;