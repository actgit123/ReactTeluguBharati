import React, { Component } from 'react';
import { Nav,Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen :false

        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        
    }
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>          
                <div className="container">
                    <div className="row ">
                            <div className="col-sm-4 pb-4">
                                    <img src="/assets/images/logo.png" alt="logo" />
                                
                             </div>
                             <div className="col-sm-4">
                            <h2>తెలుగు భారతి</h2>
                            <h6>తెలుగు నేర్చుకోండి, తెలుగుదనం పంచండి</h6>
                            </div>
                        
                        <div  className="col-sm-4">
                            <Button  className="btn btnheader">Register</Button>
                            <Button  className="btn btnheader">LogIn</Button>                          
                         </div>
                    </div>   
                </div>                                   
                </Jumbotron>

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
                                
                                        <i className="fa fa-list fa-lg" />Directory
                                    
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

