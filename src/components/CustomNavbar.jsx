import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import Font Awesome icon
import Logo from '../assets/logo.jpg'; // Import logo image
import ChatHistory from './ChatHistory'; // Import ChatHistory component
import TypewriterComponent from './TypewriterComponent'; // Import TypewriterComponent
import { useAuth0 } from '@auth0/auth0-react'; // Import Auth0 hooks

function Navbar() {
  const { logout } = useAuth0(); // Use Auth0 hook for logout
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [showChatHistory, setShowChatHistory] = useState(false); // New state for chat history visibility

  const toggleOffCanvas = () => {
    setOffCanvasOpen(!offCanvasOpen);
  };

  const closeOffCanvas = () => {
    setOffCanvasOpen(false);
  };

  const toggleChatHistory = () => {
    setShowChatHistory(!showChatHistory);
  };

  return (
    <nav className={`navbar ${offCanvasOpen ? 'open' : ''}`} style={{ height: '60px' }}>
      <div className="navbar-brand">
        <a href="/" style={{ display: 'inline-block' }}>
          <img 
            src={Logo} 
            alt="Logo" 
            style={{ 
              width: '110px', 
              height: 'auto', 
              marginTop: '5px',
              filter: 'drop-shadow(0 0 1px #3acfbb) drop-shadow(0 0 5px #3acfbb) drop-shadow(0 0 20px #3acfbb)',
              transition: 'filter 0.3s',
            }} 
            onMouseOver={(e) => e.target.style.filter = 'drop-shadow(0 0 5px #3acfbb) drop-shadow(0 0 10px #3acfbb) drop-shadow(0 0 30px #3acfbb)'}
            onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 1px #3acfbb) drop-shadow(0 0 5px #3acfbb) drop-shadow(0 0 20px #3acfbb)'}
          />
        </a>
      </div>
      <div className="typewriter-container">
        <TypewriterComponent />
      </div>
      <div className={`offcanvas ${offCanvasOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <h2>CHAT HISTORY</h2>
          <button className="close-offcanvas-btn" onClick={closeOffCanvas}>Close</button>
        </div>
        <div className="offcanvas-body">
          <ChatHistory
            messages={[]} // Pass your messages array here
            isOpen={showChatHistory}
            onClose={toggleChatHistory}
          />
        </div>
      </div>
      <button className="offcanvas-toggle-btn" onClick={toggleOffCanvas} style={{ marginLeft: '10px' }}>
        History--
      </button>
      <button onClick={() => logout({ returnTo: window.location.origin })} style={{ marginLeft: '10px' }}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
