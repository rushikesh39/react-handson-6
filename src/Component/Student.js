import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";


function Student() {
  return (
    <>
    <Nav/>
    <div className="student">
     <h1>Student Details</h1>
     <button>add new Student </button>
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
        <tr>
          <td>Rushi</td>
          <td>21</td>
          <td>MERN</td>
          <td>E21</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Rushi</td>
          <td>21</td>
          <td>MERN</td>
          <td>E21</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Rushi</td>
          <td>21</td>
          <td>MERN</td>
          <td>E21</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Rushi</td>
          <td>21</td>
          <td>MERN</td>
          <td>E21</td>
          <td><Link>Edit</Link></td>
        </tr>
        <tr>
          <td>Rushi</td>
          <td>21</td>
          <td>MERN</td>
          <td>E21</td>
          <td><Link>Edit</Link></td>
        </tr>
      </tbody>
     </table>
    </div>
    </>
  );
}
export default Student;


