import Logo from '../assets/NepalTF_Logo.png';
import { Link } from "react-router-dom";

import './NavbarStyle.css';
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import DarkMode from './DarkMode/DarkMode';


export default function Navbar() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav" );
    };
    const [isOpen, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen(!isOpen)
    }
  return (
        <>
        <nav className='App-header'>
          <Link to="/" className='Link-style'>
            <img src={Logo} className="App-logo" alt="logo" />
          </Link>  
          <ul id="nav" ref={navRef}>
        <li className='Link-style-parent'>
          <Link to="/about" className='Link-style'>
            <p className='nav-routes'>
              About
            </p>
          </Link>
        </li>

        <li className='Link-style-parent'>
          <Link to="/roster" className='Link-style'>
            <p className='nav-routes'>
              Roster
            </p>
          </Link>
        </li>

        <li className='Link-style-parent'>
          <Link to="/nepalirecords" className='Link-style'>
            <p className='nav-routes'>
              Nepali Records
            </p>
          </Link>
        </li>

        <li className='Link-style-parent'>
          <Link to="/contactus" className='Link-style'>
            <p className='nav-routes'>
             Contact Us
            </p>
          </Link>
        </li>
        <DarkMode />

        <button
        className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes style={{ width: 30, height: 30}} />
        </button>

        </ul>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars style={{ width: 30, height: 30, margin: 10}} />
			</button>
       </nav>
      </>
    )
}    

