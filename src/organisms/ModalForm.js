import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import LoginForm from '../molecules/Login'

export default class ModalForm extends Component  {
    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this);
        this.state = {
        
        }
       
    }
    
    handleClose() {
     console.log(this.state.handleModal)
    }

    render(){
        return (
            <div>
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" onClick={this.handleModal}>
                    Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm/>
                </Modal.Body>
                </Modal> 
            </div>
        )
    }
}

