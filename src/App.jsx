// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './components/Themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './Routes';

function App(){
  
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App;
