import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar1 from '../Navbar/Navbar1';

const Main = () => {
  return (
    <div>
      <Navbar1></Navbar1>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;