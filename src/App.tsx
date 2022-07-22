import React from 'react';
import './App.css';
import HomePage from "./Pages/Home";
import Menu from "./components/Menu";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
