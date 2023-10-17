import React, { useState } from 'react';
import { submitMessage } from '../api';
import { useAuth } from 'react-oauth2-authprovider';

const SubmitMessage = () => {
  const [message, setMessage] = useState('');
  const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  const handleSubmit = async () => {
    if (message.trim() !== '') {
      await submitMessage(message);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Submit Anonymous Message</h2>
      <textarea
        rows={4}
        cols={50}
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default SubmitMessage;
