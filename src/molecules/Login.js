import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
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
                {modal === "daftar" ? <Daftar />  : <div></div>}
                
                <Button variant="primary" onClick={handleSubmit}>
                    {modal === "masuk" ? "masuk" : "daftar"} 
                </Button>
                </Form>
            </div>  
        )
    }

    
}

function Daftar(){
    return <div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Kota</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                type="radio"
                label="Pria"
                name="Pria"
                id="Pria"
                />
                <Form.Check
                type="radio"
                label="Wanita"
                name="Wanita"
                id="Wania"
                />
            </Form.Group>
    </div>
}