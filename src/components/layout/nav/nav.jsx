import React from 'react';
import './nav.css';

function showMenu() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}


export default function Nav() {


  return (
    <nav className="nav" >
      <div className="menu-icon" onClick={showMenu}>
        <li></li>
        <li></li>
        <li></li>
      </div>
      <div id="nav-menu">
        <ul className='nav-links'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/stories">Stories</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
          <li>
            <a href="/poems">Poems</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
