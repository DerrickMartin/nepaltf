import Logo from '../assets/NepalTF_Logo.png';
import { Link } from "react-router-dom";

import './NavbarStyle.css';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav" );
    };
  return (
        <>
        <nav className='App-header'>
          <Link to="/" className='Link-style'>
            <img src={Logo} className="App-logo" alt="logo" />
          </Link>  
          <ul id="nav" ref={navRef}>
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
        <button
        className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
        </button>
        </ul>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
       </nav>
      </>
    )
}