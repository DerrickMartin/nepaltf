import Logo from '../assets/NepalTF_Logo.png';
import { Link } from "react-router-dom";

import './NavbarStyle.css';

export default function Navbar() {
    return (
        <>
        <header className="App-header">
        <Link to="/">
        <img src={Logo} className="App-logo" alt="logo" />
        </Link>
        <Link to="/about">
        <p className='nav-routes'>
          About
        </p>
        </Link>
        <Link to="/roster">
        <p className='nav-routes'>
          Roster
        </p>
        </Link>
        <Link to="/trackrecords">
        <p className='nav-routes'>
          Track Records
        </p>
        </Link>
        <Link to="/contactus">
        <p className='nav-routes'>
          Contact Us
        </p>
        </Link>
      </header>
      <div className='app-body'>
        <p>Welcome to Nepals Track and Field Website!</p>
      </div>
      </>
    )
}