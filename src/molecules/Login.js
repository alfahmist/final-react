import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import Daftar from '../molecules/Daftar'
export default class Login extends Component {
    render(){
        let {handleChange, handleSubmit, modal} = this.props;
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
                {modal === "daftar" ? <Daftar handleChange={handleChange} />  : <div></div>}
                
                <Button variant="primary" onClick={handleSubmit}>
                    {modal === "masuk" ? "masuk" : "daftar"} 
                </Button>
                </Form>
            </div>  
        )
    }

    
}