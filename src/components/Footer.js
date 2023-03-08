import Logo from '../assets/NepalTF_Logo.png';
import './FooterStyles.css';

import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
    return (
        <div className="footersection"> 
            <div className='top-footer'>
            <img src={Logo} className="App-logo" alt="logo" />
            </div>
            <div className='socialmedia-links'>
                
                <SocialIcon url="https://facebook.com" className='social-icons'/>
                <SocialIcon url="https://instagram.com" className='social-icons'/>
                <SocialIcon url="https://tiktok.com" className='social-icons'/>


            </div>
        </div>

    )
}
