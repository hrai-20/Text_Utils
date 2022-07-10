import React, { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [Mode,setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const toggleMode = ()=>{
  if(Mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtils - Dark Mode'; 
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
    document.title = 'TextUtils - Light Mode';
  }
  
}

   return (
    <>
    
 {/*<Navbar title="TextUtils" abouttext="About us"></Navbar> 
<Navbar></Navbar>*/}
<Router>
<Navbar title='TextUtils' mode = {Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3"> 
<Routes>
          <Route exact path="/about" element = {<About/>}/>
            
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {Mode} ></TextForm>}/>
           
    
</Routes>
</div>
</Router>
 
     </>
   );
 }

export default App;
