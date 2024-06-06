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
        <ChatComponent
          setImportedText={setImportedText}
          messages={messages}
          setMessages={setMessages}
        />
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Techy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
