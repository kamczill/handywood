import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App';
import About from './components/About';
import Contact from './components/Contact'

import '@fontsource/forum'
import "swiper/css/bundle";
import "./styles.css";

const theme = extendTheme({
  fonts: {
    forum: `'Forum', cursive;`,
    sf: `'SF Pro Display', sans-serif`,
    paragraph: `'Mulish', sans-serif`
  },
  colors: {
    pink: '#F551FF',
    ocean: '#00E6CA',
    blue: '#2820FC'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
