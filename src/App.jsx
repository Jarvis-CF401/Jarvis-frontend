import React, { useState } from 'react';
import './App.css';
import Navbar from './components/CustomNavbar';
import ChatComponent from './components/ChatComponent';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [importedText, setImportedText] = useState('');
  const [messages, setMessages] = useState([]);

  return (
    <div className="app-container">
      <ParticleBackground />
      <header className="app-header">
        <Navbar />
      </header>
      <main className="main-content">
        {/* Render the LeftMenu component */}
    
        <ChatComponent
          setImportedText={setImportedText}
          messages={messages}
          setMessages={setMessages}
        />
      </main>
      <footer className="footer">
        <p>&copy; Copyright-J.A.R.V.I.S.</p>
        <p>(Code 401)</p>
      </footer>
    </div>
  );
}

export default App;

