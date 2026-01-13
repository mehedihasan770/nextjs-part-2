import Navbar from '@/components/mainLayout/navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <header><Navbar/></header>
            <main>{children}</main>
        </>
    );
};

export default MainLayout;