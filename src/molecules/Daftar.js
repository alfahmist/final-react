import React from 'react'
import {Form} from 'react-bootstrap'
export default function Daftar(props){
    let {handleChange} = props;
    return <div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Kota</Form.Label>
                <Form.Select name="kota" aria-label="Default select example" onChange={handleChange}>
                    <option>Open this select menu</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="depok">Depok</option>
                    <option value="bogor">Bogor</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange}>
                <Form.Label>Gender</Form.Label>
                <Form.Check
                type="radio"
                label="Pria"
                name="gender"
                id="Pria"
                value="Pria"
                />
                <Form.Check
                type="radio"
                label="Wanita"
                name="gender"
                id="Wanita"
                value="Wanita"
                />
            </Form.Group>
    </div>
}