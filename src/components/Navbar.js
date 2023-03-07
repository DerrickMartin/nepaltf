import Logo from '../assets/NepalTF_Logo.png';
import { Link } from "react-router-dom";

import './NavbarStyle.css';

export default function Navbar() {
    return (
        <>
        <nav className='App-header'>
          <Link to="/">
            <img src={Logo} className="App-logo" alt="logo" />
          </Link>  
          <ul>
        <li>
          <Link to="/about">
            <p className='nav-routes'>
              About
            </p>
          </Link>
        </li>

        <li>
          <Link to="/roster">
            <p className='nav-routes'>
              Roster
            </p>
          </Link>
        </li>

        <li>
          <Link to="/trackrecords">
            <p className='nav-routes'>
              Track Records
            </p>
          </Link>
        </li>

        <li>
          <Link to="/contactus">
            <p className='nav-routes'>
             Contact Us
            </p>
          </Link>
        </li>

        </ul>
       </nav>
      </>
    )
}