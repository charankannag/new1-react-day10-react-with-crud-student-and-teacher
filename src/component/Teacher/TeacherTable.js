import React, { useState, useEffect } from "react";

import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TeacherData } from "./TeacherData";
import Update from "./UpdateTeacher";
import axios from "axios";

export default function TeacherTable() {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    axios
      .get("https://64477bb750c253374425ea00.mockapi.io/crud/teacher")
      .then((res) => setTeacher(res.data));
  }, []);

  const history = useNavigate();

  function handleRemove(id) {
    axios
      .delete(`https://64477bb750c253374425ea00.mockapi.io/crud/teacher/${id}`)
      .then(() => {
        getData();
      });
  }

  function getData() {
    axios
      .get("https://64477bb750c253374425ea00.mockapi.io/crud/teacher")
      .then((d) => {
        setTeacher(d.data);
      });
  }

  function setData(id, name, batch) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("batch", batch);
  }

  return (
    <>
      <div className="teacher-table">
        <div className="teacher-table-list" style={{ margin: "2rem" }}>
          <Table table stripped hover size="lg">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Batch</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {teacher.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.batch}</td>
                  <td>
                    <Link to="update">
                      <Button
                        className="btn btn-light"
                        onClick={()=>setData(data.id, data.name, data.batch)}
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
          <div className="teacher-table-button">
            <Link to="mentor">
              <button className="btn btn-outline-success">Create</button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
