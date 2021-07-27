import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import LoginForm from '../molecules/Login'
function modal(props) {
    return (
        <div>
                <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" type="submit">Masuk</Button>
            </Modal.Footer>
            </Modal> 
        </div>
    )
}

export default modal
