
import './App.css';
import {useState} from 'react'
import About from './components/About';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{

  setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const [myMode,setMyMode]=useState('light')
  const changeBlackMode=()=>{
    if(myMode==='dark'){
      setMyMode('light')
      document.body.style.backgroundColor=`white`
    }
    else{
      setMyMode('dark')
       document.body.style.backgroundColor='rgb(33,37,41,0.85)'
       showAlert('Dark Mode is enabled','success')
    }
  }
  const changeGreenMode=()=>{
    if(myMode==='success'){
      setMyMode('light')
      document.body.style.backgroundColor=`white`
    }
    else{
      setMyMode('success')
       document.body.style.backgroundColor='rgb(179, 255, 174,0.5)'
       showAlert('Green Mode is enabled','success')
    }
  }
  const changeBlueMode=()=>{
    if(myMode==='primary'){
      setMyMode('light')
      document.body.style.backgroundColor=`white`
    }
    else{
      setMyMode('primary')
       document.body.style.backgroundColor='rgb(13,110,253,0.5)'
       showAlert('Blue Mode is enabled','success')
    }
  }
  const changeYellowMode=()=>{
    if(myMode==='warning'){
      setMyMode('light')
      document.body.style.backgroundColor=`white`
    }
    else{
      setMyMode('warning')
       document.body.style.backgroundColor='#F6F6C9'
       showAlert('Yellow Mode is enabled','success')
    }
  }
  return (
    <>
  <Navbar title="TextUtils" aboutText="About" mode={myMode} changeBlackMode={changeBlackMode} changeGreenMode={changeGreenMode} changeBlueMode={changeBlueMode} changeYellowMode={changeYellowMode}/>
  <Alerts alert={alert} />
  <TextForm heading="Enter the text to analyze below" mode={myMode} showAlert={showAlert}/>
   <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={myMode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About />} />
      </Routes> 
  <div className="container my-3">
  
  </div>
    </>
  );
}

export default App;
