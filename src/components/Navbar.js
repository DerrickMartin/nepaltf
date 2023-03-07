import Logo from '../assets/NepalTF_Logo.png';
import { Link } from "react-router-dom";

import './NavbarStyle.css';

export default function Navbar() {
    return (
        <>
        <nav className='App-header'>
          <Link to="/" className='Link-style'>
            <img src={Logo} className="App-logo" alt="logo" />
          </Link>  
          <ul>
        <li>
          <Link to="/about" className='Link-style'>
            <p className='nav-routes'>
              About
            </p>
          </Link>
        </li>

        <li>
          <Link to="/roster" className='Link-style'>
            <p className='nav-routes'>
              Roster
            </p>
          </Link>
        </li>

        <li>
          <Link to="/trackrecords" className='Link-style'>
            <p className='nav-routes'>
              Track Records
            </p>
          </Link>
        </li>

        <li>
          <Link to="/contactus" className='Link-style'>
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