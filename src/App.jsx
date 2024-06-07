import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatComponent from './components/ChatComponent';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/CustomNavbar';
import ParticleBackground from './components/ParticleBackground';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

const App = () => {
  const [importedText, setImportedText] = useState('');
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useAuth0();

  if(isAuthenticated) console.log('User is authenticated');

  return (
    <Router>
      <div className="app-container">
        <ParticleBackground />
        <header className="app-header">
          <Navbar />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/chat"
              element={
                  <ChatComponent
                    setImportedText={setImportedText}
                    messages={messages}
                    setMessages={setMessages}
                  />
              }
            />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; Copyright Team JARVIS</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
