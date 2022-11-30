import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)


const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
}

setTimeout(() => {
  setalert(null);
}, 2500);

 const toggleMode=()=>{
  if(mode==='light'){
  setmode('dark');
  document.body.style.backgroundColor='grey';
  showAlert("Dark mode Enabled","success")
}
  else{
  setmode('light');
  document.body.style.backgroundColor='white';
  showAlert("light mode Enabled","success")

  }
}

  return (
    <>  
    <Router>  
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container">
      <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here" mode={mode}/>}/>
      <Route exact path="about" element={<About />}/>
      </Routes> 
      {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
