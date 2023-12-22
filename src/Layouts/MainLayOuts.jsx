import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../sheard/NavBar';
import Footer from '../sheard/Footer';

const MainLayOuts = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/singup');
    return (
        <div>
            {
                noHeaderFooter || <NavBar></NavBar>
            }
            <div className='-pt-10  min -h-[calc(100vh-60)]'>
                <Outlet></Outlet>
            </div>
            {
                noHeaderFooter || <Footer></Footer>
            }
            
        </div>
    );
};

export default MainLayOuts;