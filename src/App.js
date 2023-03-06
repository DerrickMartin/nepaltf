import './App.css';

import Logo from './assets/NepalTF_Logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p className='nav-routes'>
          About
        </p>
        <p className='nav-routes'>
          Roster
        </p>
        <p className='nav-routes'>
          Track Record
        </p>
        <p className='nav-routes'>
          Contact Us
        </p>
      </header>
      <div className='app-body'>
        <p>Welcome to Nepals Track and Field Website!</p>
      </div>
    </div>
  );
}

export default App;
