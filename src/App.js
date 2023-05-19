import './App.css';
import React, {useState} from 'react'
import Home from './Component/Home';
import Contact from './Component/Contact';
import Student from './Component/Student';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Nav from './Component/Nav';
import store from './Component/StoreComponent';
import EditStudent from './Component/EditStudent';
import NewStudent from './Component/AddStudent';

function App() {
  const [data, setData] = useState([
    {name: "Sangram1", Age: 24, Course: "MERN", Batch: "Jan"},
    {name: "Sangram2", Age: 24, Course: "MERN", Batch: "Jan"},
    {name: "Abdul1", Age: 23, Course: "MEAN", Batch: "Jan"},
    {name: "Abdul2", Age: 23, Course: "MEAN", Batch: "Jan"},
    {name: "Abdul3", Age: 23, Course: "MEAN", Batch: "Jan"},
    {name: "Sayyed1", Age: 22, Course: "MEVN", Batch: "Jan"},
    
  ])
  return (
    <div className='App'>
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
              <Student />
            </store.Provider>
          } />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path='/contactUs' element={<Contact/>}/>
          {/* Edit student able to acess the contextAPI data */}
          <Route path="/editstudent" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
            <EditStudent />
          </store.Provider>
          } />
          <Route path="/newstudent" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
            <NewStudent />
          </store.Provider>
          } />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
