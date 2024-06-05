import React, { useState } from 'react';
import './App.css';
import Navbar from './components/CustomNavbar';
import ChatComponent from './components/ChatComponent';

function App() {
  const [importedText, setImportedText] = useState('');

  return (
    <div className="app-container">
      <header className="app-header">
         <Navbar />
      </header>
      <main className="main-content">
       
        <ChatComponent setImportedText={setImportedText} />
        
        <p className="read-the-docs">Read the docs for more info.</p>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Techy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
