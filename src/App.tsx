import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import List from './components/List/List';
import Auth from './components/Auth/Auth';
import { AuthProvider } from './components/Auth/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routings from './components/Routes/Routing';

const App: React.FC = () => {
  console.log('=env',process.env.PUBLIC_URL);
  return (
    <AuthProvider >
      <Router  basename={process.env.PUBLIC_URL}>
        <Header />
        <Routings />
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;