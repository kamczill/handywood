import './App.css';
import { Box } from '@chakra-ui/react'

import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Products';
import Realizations from './components/Realizations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>

    <Box w='100%'>
      <Nav/>
        <Header/>
        <Features />
        <About />
        <Products />
        <Realizations />
        <Contact />
        <Footer />
    </Box>

    </Router>
  );
}

export default App;
