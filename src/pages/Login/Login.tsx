import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    // const [name,setName] = useState("")
    // const nameRef = useRef(null)

    // const login=()=>{
    //     nameRef.current && setName(nameRef.current['value'])
    // }
    const counter=() => {
    
        navigate("/tasks");
      }
  return (
    <Form>
            <Form.Group>
                <Form.Label htmlFor="name">Username:</Form.Label>
                <Form.Control type='text' id="name"
                //  ref={nameRef} 
                 />
            </Form.Group>
            <Button onClick={counter}>Login</Button>
        </Form>
  )
}

export default Login
