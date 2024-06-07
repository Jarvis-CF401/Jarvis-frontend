import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const ChatComponent = ({ setImportedText }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatWindowRef = useRef(null);

  const sendMessage = async (text, isUser) => {
    const newMessage = { text: '', isUser };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (!isUser) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = { ...lastMessage, text: lastMessage.text + text[i] };
            return updatedMessages;
          });
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // Typing speed (in milliseconds per character)
    } else {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = { ...newMessage, text };
        return updatedMessages;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    sendMessage(inputValue, true);
    setInputValue('');

    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        'http://localhost:3000/process-code',
        { messages: [{ role: 'user', content: inputValue }] },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const botResponse = response.data.result.choices[0].message.content;
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
          placeholder="How may I assist you?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChatComponent;
