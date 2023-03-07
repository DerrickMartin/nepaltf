import Logo from '../assets/NepalTF_Logo.png';
import { Link } from "react-router-dom";

import './NavbarStyle.css';

export default function Navbar() {
    return (
        <>
        <header className="App-header">
        
        <nav>
          <ul>

        <li>
          <Link to="/">
            <img src={Logo} className="App-logo" alt="logo" />
          </Link>  
        </li>

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
          <Link to="./pages/trackrecords">
            <p className='nav-routes'>
              Track Records
            </p>
          </Link>
        </li>

        <li>
          <Link to="../pages/contactus">
            <p className='nav-routes'>
             Contact Us
            </p>
          </Link>
        </li>

        </ul>
       </nav>
      </header>
      <div className='app-body'>
        <p>Welcome to Nepals Track and Field Website!</p>
      </div>
      </>
    )
}