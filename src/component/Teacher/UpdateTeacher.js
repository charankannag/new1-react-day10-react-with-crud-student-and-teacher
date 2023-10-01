import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Edit(props) {

  const [id,setId] = useState();
  const [name,setName] = useState();
  const [batch, setBatch] = useState();

  const reload = useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setBatch(localStorage.getItem('batch'))
  },[])


  function handleUpdate() {
  
    
    axios.put(`https://64477bb750c253374425ea00.mockapi.io/crud/teacher/${id}`,{
      name,
      batch
    })
    alert('Updated Successfully! Refresh the page..')

  }
  return (
    <div className="update-table" style={{ margin: "1rem" }}>
      <Form className="d-grid" style={{ margin: "1rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            name="name"
            value={name}
            required
            onChange={(e)=>setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
       
        <Form.Group className="mb-3" controlId="formBatch">
          <Form.Control
            type="text"
            name="batch"
           value={batch}
            required
            onChange={(e)=>setBatch(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={handleUpdate}
          type="submit"
          className="btn btn-warning"
        >
          UPDATE
        </Button>
      </Form>
    </div>
  );
}
