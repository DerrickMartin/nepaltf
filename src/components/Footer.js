import Logo from '../assets/NepalTF_Logo.png';
import './FooterStyles.css';

import React from 'react';
import { SocialIcon } from 'react-social-icons';

import DonateButton from './donate';
import SiteVisit from './SiteVisit';


export default function Footer() {
    return (
        <div className="footersection"> 
            <div className='top-footer'>
            <img src={Logo} className="App-logo" alt="logo" />
            </div>
            <div className='socialmedia-links'> 
                <SocialIcon url="https://facebook.com" style={{ width: 30, height:30, margin: 5}}/>
                <SocialIcon url="https://tiktok.com" style={{ width: 30, height: 30, margin: 5}}/>
                <SocialIcon url="https://instagram.com" style={{ width: 30, height: 30, margin: 5}}/>
            <div className='donate-section'>
                <DonateButton/>
            </div>
            <SiteVisit />
            </div>
        </div>

    )
}

