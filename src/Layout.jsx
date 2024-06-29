import React from 'react'
import Home from './Pages/Home';
import { Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import Navber from './Commponents/Navber';

const Layout = () => {
    return (
        <>
          <div>
            <Home />
            <Navber />
            <Outlet />
          </div>
        </>
      );
    }
    
    export default Layout;
 