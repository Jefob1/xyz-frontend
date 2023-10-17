import React from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import SubmitMessage from './components/SubmitMessage';
import RetrieveMessages from './components/RetrieveMessages';

const App = () => {
  return (
<Router>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/submit">Submit Message</Link>
      </li>
      <li>
        <Link to="/retrieve">Retrieve Messages</Link>
      </li>
    </ul>
  </nav>

  {(window.location.pathname === '/submit') && (
    <SubmitMessage />
  )}

  {(window.location.pathname === '/retrieve') && (
    <RetrieveMessages />
  )}

  {(window.location.pathname === '/') && (
    <h2>Welcome to the Anonymous Messenger</h2>
  )}
</Router>

  );
};

export default App;
