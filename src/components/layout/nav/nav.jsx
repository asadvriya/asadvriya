import React from 'react';
import './nav.css';

export default function Nav() {
  return (
    <nav className="nav">
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
    </nav>
  );
};
