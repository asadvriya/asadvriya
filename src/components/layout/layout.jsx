import React from 'react'
import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom';
import "./layout.css"
const Header = lazy(()=>import("./header/header"));
const Nav = lazy(()=>import("./nav/nav"));
const Footer = lazy(()=>import("./footer/footer"));


export default function Layout() {
  return (    
    <>
        <Suspense fallback={<header className='fallback'>loading...</header>}>
            <Header/>
        </Suspense>
        <Suspense fallback={<nav className='fallback'>loading...</nav>}>
            <Nav/>
        </Suspense>
        <Outlet/>
        <Suspense fallback={<footer className='fallback'>loading</footer>}>
            <Footer/>
        </Suspense>
    </>
  );
};
