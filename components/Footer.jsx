import React from 'react'
import XIcon from '@mui/icons-material/X';
import "../assets/Footer.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-main'>
            <h1>Kalyptica</h1>
            <div className='main-div'> 
                <ul className='main-div-ul'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/articles">Articles</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className='opt'>
                    <a href="https://www.x.com/Kalyptica" target="_blank" rel="noopener noreferrer" className='footer-opt'><XIcon/></a>
            </div>
        </div>
        <div className='footer-end'>
            <p>2025 All Rights Reserverd</p>
            <p></p>
        </div>
    </footer>
  )
}

export default Footer