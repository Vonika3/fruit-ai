import React, { useState } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', fromBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, fromBot: false },
        { text: 'Thank you for your message! I will get back to you shortly.', fromBot: true }
      ]);
      setInput('');
    }
  };

  return (
    <div className="chatbox-page">
      <h1>Chatbox</h1>
      <div className="chatbox">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.fromBot ? 'from-bot' : 'from-user'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chatbox-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
