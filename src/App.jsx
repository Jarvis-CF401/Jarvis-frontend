import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import ChatComponent from './components/ChatComponent';
import Login from './components/Login';
import Navbar from './components/CustomNavbar';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

const App = () => {
  const [importedText, setImportedText] = useState('');
  const [messages, setMessages] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <ParticleBackground />
        <header className="app-header">
          <Navbar />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <ChatComponent
                    setImportedText={setImportedText}
                    messages={messages}
                    setMessages={setMessages}
                  />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; Copyright Team JARVIS</p>
          <p>(Code Fellows | JS401)</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
