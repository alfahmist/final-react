import React, { Component } from 'react'
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap'
import logo from '../logo.svg'
import LoginForm from '../molecules/Login'
import RegisterForm from '../molecules/Login'


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.handleModal = this.handleModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDaftar = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDaftar = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            show : false,
            isLoggedIn : false,
            username: "",
            password: "",
            modal : ""
        }
    }
    
    handleModal(event){

        if(event.target.id === "daftar"){
            this.setState({
                modal: "daftar"
            })
        }
         else {
            this.setState({
                modal: "masuk"
            })
         }
        this.setState({
            show: true
        })
    }
    
    handleClose() {
        this.setState({
            show: false
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleChangeDaftar(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    handleSubmit(event) {
        let user = {
            username : "admin",
            password : "admin"
        }
        let {username, password} = this.state
        if (user.username === username && user.password === password)
        {
            this.setState({
                show: false,
                username : "",
                password : "",
                isLoggedIn : true,
            })
        }
        else {
            alert("username atau password salah")
        }
        event.stopPropagation();
        event.preventDefault();
    }

    handleLogout() {
        this.setState({
            isLoggedIn : false
        })
    }

    handleDaftar(){

    }
    render() {
        return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top App-logo"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                {
                    this.state.isLoggedIn ?  
                    <Button variant="outline-success" onClick={this.handleLogout}>keluar</Button>:
                    <Button id="masuk" variant="outline-success" onClick={this.handleModal}>Masuk</Button> 
                }
                {
                    this.state.isLoggedIn ?  <div></div>:
                <div className="margin-left-2">
                     <Button id="daftar" variant="success" onClick={this.handleModal}>Daftar</Button>
                 </div>
                }
                   
                 
                   
            </Navbar.Collapse>
            </Container>
            </Navbar>
            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" onClick={this.handleClose}>
                    {
                        this.state.modal === "daftar" ? "Daftar" : "Masuk"
                    }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        this.state.modal === "daftar" ? 
                        <LoginForm {...this.state} handleChange={this.handleChangeDaftar} handleSubmit={this.handleDaftar}/> : 
                        <RegisterForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    }
                    
                </Modal.Body>
                </Modal> 
        </div>  
    
        )
    }
}
