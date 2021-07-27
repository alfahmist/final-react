import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
export default class Login extends Component {
    render(){
        let {handleChange, handleSubmit} = this.props;
        return (
         
            <div>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Masukkan username" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Masukkan Password" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Masuk
                </Button>
                </Form>
            </div>  
        )
    }
}