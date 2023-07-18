import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './components/Router';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <AppBar/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;
