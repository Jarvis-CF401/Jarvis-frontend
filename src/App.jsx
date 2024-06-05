// App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/CustomNavbar';
import ChatComponent from './components/ChatComponent';
import ChatHistoryComponent from './components/ChatHistoryComponent'; // Import the ChatHistoryComponent

function App() {
  const [importedText, setImportedText] = useState('');
  const [messages, setMessages] = useState([]); // Lift state up to App component

  return (
    <div className="app-container">
      <header className="app-header">
         <Navbar />
      </header>
      <main className="main-content">
        <ChatHistoryComponent messages={messages} /> {/* Include the ChatHistoryComponent */}
        <ChatComponent setImportedText={setImportedText} messages={messages} setMessages={setMessages} />
  
  <p className="read-the-docs">Read the docs for more info.</p>
</main>
      <footer className="footer">
        <p>&copy; 2024 My Techy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
