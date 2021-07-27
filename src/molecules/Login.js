import React from 'react'
import {Form} from 'react-bootstrap'
function Login(props) {
    return (
        <div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Masukkan username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password" />
            </Form.Group>
            </Form>
        </div>  
    )
}

export default Login

