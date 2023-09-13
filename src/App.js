// import logo from './logo.svg';
import './App.css';
// import About from './components/About'; 
import Navbar from './components/Navbar';

import Textform from './components/Textform';
import React,{useState} from 'react';

function App(){
  const[mode,setMode]=useState(`light`)
const togglemode = ()=>{
  if(mode==="light")
  setMode("dark")
}
  return (
   <>
{/* <Navbar title="Textutil" abouttext="About textutil"/> */}
<Navbar title="Textutil" mode={mode} enabledark={togglemode}/>
<div className="container my-3">
<Textform heading="Enter the text "/>

 {/* <About/> */}
</div>
   </>
  );
}
export default App;
