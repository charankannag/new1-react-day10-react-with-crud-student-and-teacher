import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";


export default function AddStudent() {

  const history = useNavigate()
 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');

  function handleSubmit(e){
    axios.post('https://64477bb750c253374425ea00.mockapi.io/crud/user',{
      name,
      age,
      course,
      batch
      })
      alert('Successfully added!..')
  }

  return (
    <>  


    <Form className="d-grid" style={{margin:'1rem'}}>
           <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Your Name" required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formAge">
            <Form.Control type="number" placeholder="Age" onChange={(e)=>setAge(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formCourse">
            <Form.Control type="text" placeholder="Course" required onChange={(e)=>setCourse(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBatch">
            <Form.Control type="text" placeholder="Batch ID" required onChange={(e)=>setBatch(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Button onClick={(e)=>handleSubmit(e)} type='submit'>SUBMIT</Button>
          
        </Form>
      
    </>
  );
}
