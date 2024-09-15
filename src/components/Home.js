// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Fruit.ai</h1>
      <nav>
        <ul>
          <li><Link to="/chatbox">Chatbox</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/translator">Translator</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
