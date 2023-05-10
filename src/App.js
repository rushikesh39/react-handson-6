import './App.css';
import React from 'react'
import Home from './Component/Home';
import Contact from './Component/Contact';
import Student from './Component/Student';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contactUs' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
