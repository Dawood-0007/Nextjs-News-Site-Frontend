import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../assets/Footer.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-main'>
            <h1>Khatreez</h1>
            <div className='main-div'> 
                <ul className='main-div-ul'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/articles">Articles</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className='opt'>
                    <a href="https://www.instagram.com/khatreeez" target="_blank" rel="noopener noreferrer" className='footer-opt'><InstagramIcon/></a>
                    <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer" className='footer-opt'><FacebookIcon/></a>
                    <a href="https://www.x.com/katreez" target="_blank" rel="noopener noreferrer" className='footer-opt'><XIcon/></a>
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