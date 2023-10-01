import React, { useEffect } from "react";
import { StudentData } from "./StudentData";
import { Button, Table } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import add from "./AddStudent";
import { useState } from "react";
import axios from "axios";

export default function StudentTable() { 
  
  const reload = useNavigate();

 

  const [student, setStudent] = useState([]);

 useEffect(() => getStudent(), []);

  function getData(){
    axios.get('https://64477bb750c253374425ea00.mockapi.io/crud/user')
      .then((data)=>{
         setStudent(data.data)
      })
  }

  function getStudent() {
     axios.get('https://64477bb750c253374425ea00.mockapi.io/crud/user')
     .then((r)=>{
      setStudent(r.data)
     })
      
     
  }

  

  function handleRemove(id) {
    axios
      .delete(`https://64477bb750c253374425ea00.mockapi.io/crud/user/${id}`)
      .then(() => {
        getData();
      });
  }

  function handleEdit(id, name, age, email, course, batch) {
   
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
    localStorage.setItem("course", course);
    localStorage.setItem("batch", batch);
  }

  

  return (
    <>
      <div className="student-table">
        <div className="student-table-list" style={{ margin: "1rem" }}>
          <Table table stripped hover size="lg">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">Age</th>
                <th scope="col">Course</th>
                <th scope="col">batch</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {student.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.age}</td>

                  <td>{data.course}</td>
                  <td>{data.batch}</td>
                  <td>
                    <Link to="edit">
                      <Button
                        className="btn btn-light"
                        onClick={() =>
                          handleEdit(
                            data.id,
                            data.name,
                            data.age,
                            data.email,
                            data.course,
                            data.batch
                          )
                        }
                      >
                        EDIT
                      </Button>
                    </Link>
                    <Button
                      className="btn btn-dark"
                      onClick={() => handleRemove(data.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="student-table-button">
            <Link to="add">
              <button className="btn btn-outline-success">Add Student</button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
