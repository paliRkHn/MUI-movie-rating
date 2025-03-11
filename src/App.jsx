import React from 'react';
import Navbar from './components/Navbar';
import { ThemeContextProvider } from './components/Themes';
import ActionPage from './components/ActionPage';
import AnimePage from './components/AnimePage';
import SciFiPage from './components/SciFiPage';

function App(){

  
  return (

    //add Routes

    <ThemeContextProvider>
      <Navbar />
      <ActionPage />
      <AnimePage />
      <SciFiPage />
    </ThemeContextProvider>
  )
}

export default App;
