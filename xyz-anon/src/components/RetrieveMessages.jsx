import React, { useState, useEffect } from 'react';
import { retrieveMessages } from '../api';

const RetrieveMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const retrievedMessages = await retrieveMessages();
      setMessages(retrievedMessages);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Anonymous Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default RetrieveMessages;
