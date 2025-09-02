import React from 'react';
import XIcon from '@mui/icons-material/X';
import '../assets/contact.css'; 

function Contact() {
    return (
        <div className="container">
            <h1 className="header">Contact Us</h1>
            <p className="text">Feel free to reach out to us via email or follow us on social media!</p>
            
            <div className="contact-info">
                <p>Email: <a href="mailto:kalyptica@gmail.com" className="link">kalyptica@gmail.com</a></p>
                <div className="social-links">
                    <a href="https://www.x.com/Kalyptica" target="_blank" rel="noopener noreferrer"><XIcon/></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;