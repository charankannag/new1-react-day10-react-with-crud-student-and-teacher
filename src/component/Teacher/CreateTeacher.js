import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'

export default function CreateTeacher() {

  const history = useNavigate();

  const [name, setName] = useState('');
  const [id, setId] = useState();
  const [batch, setBatch] = useState('');

  function handleAdd(){
      
      axios.post('https://64477bb750c253374425ea00.mockapi.io/crud/teacher',{
       name,
       batch
      })
      alert('Succesfully Created! Refresh the Page..')
     
  }

  return (
    <div>
          
          <Form className="d-grid gap-2" style={{margin:'2rem'}}>
           <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Mentor Name" required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
           </Form.Group>
           
           <Form.Group className="mb-3" controlId="formBatch">
            <Form.Control type="text" placeholder="Batch ID" required onChange={(e)=>setBatch(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Button onClick={(e)=>handleAdd(e)} type='submit'>SUBMIT</Button>
         
        </Form>
    </div>
  )
}
