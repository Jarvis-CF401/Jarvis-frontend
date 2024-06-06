import React from 'react';

const ChatHistory = ({ messages, isOpen, onClose }) => {
  return (
    <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
      <div className="offcanvas-header">
        <h2>Chat History</h2>
        <button className="close" onClick={onClose}>Close</button>
      </div>
      <div className="offcanvas-body">
        <div className="chat-history">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;