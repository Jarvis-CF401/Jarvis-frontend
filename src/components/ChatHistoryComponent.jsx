// ChatHistoryComponent.jsx
import React from 'react';

const ChatHistoryComponent = ({ messages }) => {
  return (
    <div className="chat-history">
      <h2>Chat History</h2>
      <div className="history-window">
        {messages.map((message, index) => (
          <div key={index} className={`history-message ${message.isUser ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistoryComponent;
