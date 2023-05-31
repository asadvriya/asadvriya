import React from 'react';
import './header.css';
import logo from './profile.jpg';

export default function Header() {
  return (
    <header className="header">
      <div className="name-logo">
        <img src={logo} alt="" />
      </div>
      <h1 className='site-title'>
        <span>AvR (asadvriya)</span>
        <span> Md. Asad Chowdhary</span>
      </h1>
    </header>
  );
};
