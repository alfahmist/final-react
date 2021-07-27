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
        this.handleChangeDaftar = this.handleChangeDaftar.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDaftar = this.handleDaftar.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
            show : false,
            isLoggedIn : false,
            modal : "",
            daftar : null
        }
    }
    handleCheck(){
        console.log(this.state)
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
        let {username, password, daftar} = this.state
        if(daftar != null){
            if (daftar.username === username && daftar.password === password)
            {
                this.setState({
                    show: false,
                    username : "",
                    password : "",
                    isLoggedIn : true,
                })
                alert("Login berhasil")
            }
            else {
                alert("username atau password salah")
            }
           
        }
        else {
            alert("Daftar terlebih dahulu");
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
        let {username, password, kota, gender} = this.state
        let daftar = {
            username : username,
            password : password,
            kota    : kota,
            gender : gender
        }
        this.setState({
            show : false,
            daftar : daftar,
            username : "",
            password : ""
        })
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
                <Button variant="outline-primary" onClick={this.handleCheck}>Cek Data</Button>:
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
                        this.state.modal === "masuk" ? "Masuk" : "Daftar"
                    }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        this.state.modal === "masuk" ? 
                        <LoginForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> : 
                        <RegisterForm {...this.state} handleChange={this.handleChangeDaftar} handleSubmit={this.handleDaftar}/>
                    }
                    
                </Modal.Body>
                </Modal> 
        </div>  
    
        )
    }
}
