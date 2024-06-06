import React, { useState, useEffect, useRef } from 'react';

const ChatComponent = ({ setImportedText }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatWindowRef = useRef(null);

  const sendMessage = (text, isUser) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    sendMessage(inputValue, true);
    setInputValue('');

    // Simulating bot response
    setTimeout(() => {
      sendMessage('This is a simulated bot response.', false);
    }, 1000);
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

