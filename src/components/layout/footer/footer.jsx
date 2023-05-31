import React from 'react';
import './footer.css';

export default function Footer() {
  const today = new Date();
  return (
    <footer className="footer">
        <div className="copyright">
          &copy; {today.getFullYear()} <span className="avr">AvR</span>. All Rights Reserved.
        </div>
        <div className="footer-developed">
                <div className="developedby">
                    <span><b>Developed By: </b></span><a href="https://fb.com/asadvriya"> Md. Asad Chowdhary</a>
                </div>
                <ul className="footer-details">
                        <li>
                            <a href="/about">About <span className="footer-hide">Me</span></a>
                        </li>
                        <li>
                            <a href="/terms">Terms <span className="footer-hide">& Conditions</span></a>
                        </li>
                        <li>
                            <a href="/privacy">Privacy<span className="footer-hide"> & Policy</span></a>
                        </li>
                </ul>
            </div>
    </footer>
  );
};
