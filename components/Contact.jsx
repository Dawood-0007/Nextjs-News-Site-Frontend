import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../assets/contact.css'; 

function Contact() {
    return (
        <div className="container">
            <h1 className="header">Contact Us</h1>
            <p className="text">Feel free to reach out to us via email or follow us on social media!</p>
            
            <div className="contact-info">
                <p>Email: <a href="mailto:khatreeezz@gmail.com" className="link">khatreeezz@gmail.com</a></p>
                <div className="social-links">
                    <a href="https://www.instagram.com/khatreeez" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
                    <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
                    <a href="https://www.x.com/katreez" target="_blank" rel="noopener noreferrer"><XIcon/></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;