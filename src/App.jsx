// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/CustomNavbar';
import ChatComponent from './components/ChatComponent';
import ParticleBackground from './components/ParticleBackground';
import TypewriterComponent from './components/TypewriterComponent';
import OffCanvasChatHistory from './components/OffCanvasChatHistory';

function App() {
  const [importedText, setImportedText] = useState('');
  const [messages, setMessages] = useState([]);

  return (
    <div className="app-container">
      <ParticleBackground />
      <header className="app-header">
        <Navbar />
        <TypewriterComponent />
      </header>
      <main className="main-content">
        <ChatComponent
          setImportedText={setImportedText}
          messages={messages}
          setMessages={setMessages}
        />
        <p className="read-the-docs">How may I assist you?</p>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Techy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
