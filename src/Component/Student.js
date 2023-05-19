import React, { useContext } from "react";
import store from "./StoreComponent";
import { Link,useNavigate } from "react-router-dom";


function Student() {
  const ContextData=useContext(store);
  const Navi=useNavigate();
  return (
    <>
   
    <div className="student">
     <h1>Student Details</h1>
     <button onClick={() => {Navi('/newstudent')}}>add new Student </button>
     <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
      {ContextData.entries.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td> <Link to='/editstudent' state={{data: index}} >Edit</Link> </td>
            </tr>
          )
        })}
         
      </tbody>
     </table>
    </div>
    </>
  );
}
export default Student;


