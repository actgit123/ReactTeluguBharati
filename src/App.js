import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
    <HomeComponent />
    <Footer />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
