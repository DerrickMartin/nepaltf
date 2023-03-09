import Logo from '../assets/NepalTF_Logo.png';
import { Link } from "react-router-dom";

import './NavbarStyle.css';
import { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

    const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
      );
      const toggleTheme = () => {
      if (theme === 'light') {
      setTheme('dark');
      } else {
      setTheme('light');
      }
      };
      useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
      }, [theme]);
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
          <Link to="/trackrecords" className='Link-style'>
            <p className='nav-routes'>
              Track Records
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

        <div className={`App ${theme}`}>
                    <button onClick={toggleTheme} 
                            style={{width: 80, 
                                    height: 30, 
                                    backgroundColor: '#282c34', 
                                    borderRadius: 12,
                                    borderWidth: 1, 
                                    borderColor: 'green',
                                    }} />
                    <h1>Light/Dark</h1>
                </div>
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