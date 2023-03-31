import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type 
      })
      setTimeout(()=>{
        setAlert(null)
      }, 1500)
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#252d34'
      showAlert("Dark mode has been enabled !", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#ffffff'
      showAlert("We prefer dark mode !", "warning")
    }
  }

  return (
    <div>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={ mode } contactText="Contact Us" toggleMode = { toggleMode }/> 
    <Alert alert = { alert }/>
    <Switch>
      <Route path='/' element= {<TextForm alert={ showAlert } setHeading="Enter Text" mode={ mode } />} />

      <Route path='/about' element= {<About mode={ mode } />} />

      <Route path='/contact' element= {<Contact contactText="Contact Us" mode={ mode } alert={ showAlert } />} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
