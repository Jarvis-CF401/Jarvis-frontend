import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatComponent = ({ setImportedText }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatWindowRef = useRef(null);

  const sendMessage = async (text, isUser) => {
    const newMessage = { text, isUser };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    sendMessage(inputValue, true);
    setInputValue('');
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/process-code',
        { messages: [
          { role: 'system', content: 'You are an AI coding assistant that can help me with my code and computer science concepts, you will not respond to any other queries outside of this scope.'},
          { role: 'user', content: inputValue }
        ] },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('This is the response:', response.data);
      const botResponse = response.data.result.content;

      sendMessage(botResponse, false);
    } catch (error) {
      console.error('Error fetching data:', error);
      sendMessage('Sorry, something went wrong. Please try again later.', false);
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-component">
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="I am JARVIS: How may I assist you?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChatComponent;
