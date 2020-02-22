import React, { Component } from 'react';
import { Nav,Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem, Jumbotron,Button,Form, FormGroup, Input, Label,Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen :false,
            isModalOpen:false

        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        
    }
    toggleModal() {
        this.setState({isModalOpen:!this.state.isModalOpen});
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return(
            <React.Fragment>
                <Jumbotron>          
                <div className="container">
                    <div className="row ">
                    <div className="col my-auto col-sm-4">
                                    <img  src="/assets/images/logo.png" alt="logo" />
                                
                             </div>
                             <div className="col col-sm-4 my-auto">
                            <h2>తెలుగు భారతి</h2>
                            <h6>తెలుగు నేర్చుకోండి, తెలుగుదనం పంచండి</h6>
                            </div>
                        
                        <div  className="col col-sm-4 my-auto">
                            <Button  className="btn btnheader">Register</Button>
                            <Button  onClick={this.toggleModal} className="btn btnheader">LogIn</Button>                          
                         </div>
                    </div>   
                </div>                                   
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                     <ModalHeader  style={{ background: 'blue' }} toggle={this.toggleModal}>Login</ModalHeader>
                     <ModalBody>
                       
                     <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                     </ModalBody>
                 </Modal>
         <Navbar  dark sticky="top" expand="md">
         <div  className="container"> 
             <NavbarBrand className="mr-auto" href="/">
                 <img src="/assets/images/logo.png"  className="mr-3" height="30" width="30" alt="TeluguBharati"/>
                 </NavbarBrand>
                       <NavbarToggler onClick={this.toggleNav} />
                       <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className="mr-3">
                                   
                                        <i className="fa fa-home fa-lg" />Home
                                    
                                </NavItem>
                                <NavItem className="mr-3">
                                
                                        <i className="fa fa-list fa-lg" />Schools
                                    
                                </NavItem>
                                <NavItem className="mr-3">
                                 
                                        <i className="fa fa-info fa-lg" />About
                               
                                </NavItem>
                                <NavItem>
                                    
                                        <i className="fa fa-address-card fa-lg" />Contact Us
                                
                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                        </div>
                </Navbar>  
                 
                </React.Fragment>
        );

    }
}
export default Header;

