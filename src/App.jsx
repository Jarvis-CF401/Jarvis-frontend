import React, { useState } from 'react';
import './App.css';
import Navbar from './components/CustomNavbar';
import ChatComponent from './components/ChatComponent';
import ParticleBackground from './components/ParticleBackground';
import JarvisCircle from './components/JarvisCircle'; // Import JarvisCircle component
import JarvisCircleSmall from './components/JarvisCircleSmall'; // Import JarvisCircleSmall component


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
        {/* Render JarvisCircle component */}
        <JarvisCircle />
        {/* Render JarvisCircleSmall component */}
        <JarvisCircleSmall />
        {/* Render ChatComponent */}
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

