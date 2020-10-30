import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';
import Blogs from './Components/Blogs/Blogs';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';


function App() {
  return (
    <>
   
      <Navbar/>
      <Header/>
      <Work/>
      <Skills/>
      <Blogs/>
      <About/>
      
      
      
    </>
  );
}

export default App;
