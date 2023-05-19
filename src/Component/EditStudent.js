import React, { useContext } from 'react'
import store from './StoreComponent';
import { useLocation, useNavigate } from 'react-router-dom';

function EditStudent() {
  const ContextData = useContext(store);
  const Navi = useNavigate();
  const index = useLocation().state.data;
//    console.log(ContextData);
   // console.log(index);

   const updateObj = {
     name: ContextData.entries[index].name,
     Age: ContextData.entries[index].Age,
     Course: ContextData.entries[index].Course,
     Batch: ContextData.entries[index].Batch
   }
  const HandleChange = (e) => {
   updateObj[e.target.name] = e.target.value;
  }

  const handleUpdate = () => {
   ContextData.entries[index] = updateObj;
   Navi(-1)
  }
  const handleBack=()=>{
    Navi(-1)
  }

 return (
   <div className='addStudentContainer'>
       <h1>This is Edit Students Components</h1>
       <div className='addStudent'>
       <input type='text' name='name' placeholder={ContextData.entries[index].name} onChange={HandleChange} />
       <input type='text' name='Age' placeholder={ContextData.entries[index].Age} onChange={HandleChange}/> <br />
       <input type='text' name='Course' placeholder={ContextData.entries[index].Course}onChange={HandleChange}/>
       <input type='text' name='Batch' placeholder={ContextData.entries[index].Batch}onChange={HandleChange}/> <br />
       </div>
       <div className='btn'>
       <button onClick={handleBack} >cancle</button>
       <button onClick={handleUpdate} >Update</button>
       </div>
   </div>
 )
}

export default EditStudent;