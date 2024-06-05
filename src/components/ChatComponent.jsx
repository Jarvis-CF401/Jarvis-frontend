import React, { useState, useRef, useEffect } from 'react';

const ChatComponent = ({ setImportedText }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatWindowRef = useRef(null);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Call the API (replace with actual API call)
    const response = await getChatbotResponse(input);
    const botMessage = { text: response, sender: 'bot' };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
    setImportedText(input);
  };

  const getChatbotResponse = async (message) => {
    // Mock API response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is a mock response from the bot.");
      }, 1000);
    });
  };

  // Scroll to bottom of chat window when messages change
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-component">
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
