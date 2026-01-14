import Navbar from '@/components/mainLayout/navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <header className='sticky top-0 z-40'><Navbar/></header>
            <main className='max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto py-10'>{children}</main>
        </>
    );
};

export default MainLayout;