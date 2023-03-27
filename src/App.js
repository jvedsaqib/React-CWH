import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  const [mode, setMode] = useState('light')

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#252d34'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#ffffff'
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={ mode } toggleMode = { toggleMode }/> 
    
    <div className='container'>
      <TextForm setHeading="Enter Text" mode={ mode } />
    </div>
    
    </>
  );
}

export default App;
