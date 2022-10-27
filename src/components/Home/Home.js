import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {
  const {user} =useContext(AuthContext)
  return (
    <div>
    <span>{user?.email}</span>
      
    </div>
  );
};

export default Home;