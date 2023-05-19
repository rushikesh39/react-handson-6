
import React, { useContext } from 'react'
import store from './StoreComponent';
import { useNavigate } from 'react-router-dom';

function NewStudent() {
  const ContextData = useContext(store);
  const navi = useNavigate();
  const NewObj = {
    name: '',
    Age: '',
    Course: '',
    Batch: ''
  }

  const handleChange = (e) => {
    NewObj[e.target.name] = e.target.value;
    // console.log(NewObj);
  }

  const handleClick = () => {
    ContextData.entries.push(NewObj);
    // navi(-1)
    navi('/student')
    console.log(ContextData);
  }
  const handleBack=()=>{
    navi('/student')
  }
  return (
    <div className='addStudentContainer'>
    <div className='addStudent'>
      <input name='name' placeholder='Enter Name' onChange={handleChange} />
      <input name='Age' placeholder='Enter Age' onChange={handleChange} />
      <input name='Course' placeholder='Enter course' onChange={handleChange} />
      <input name='Batch' placeholder='Enter batch' onChange={handleChange} /> 
      
    </div>
    <div className='btn'>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleClick}>Add Student</button>
    </div>
    </div>
  )
}

export default NewStudent;