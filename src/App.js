import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/> 
    
    <div className='container'>
      <TextForm setHeading="Enter Text" />
    </div>
    
    </>
  );
}

export default App;
