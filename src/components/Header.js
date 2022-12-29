
import React, {useState} from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import LOGO from '../imagenes/KeyTechTrademark.jpg'

const Header =() => {
    const [registro, setRegistro] = useState(false);
    function manejadorRegistro() {
        return setRegistro(!registro);
    }
    return (
        <header className='headerContainer'style={{position:"sticky",top:"0", zIndex:"999"}}>

         <Navbar className='navContainer' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">

                <img src={LOGO} alt="LOGO" className='imagenLogo'/>
                

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">
                
                     <NavLink className='navlink' to="/">inicio</NavLink>
                
                </Nav.Link>
                <Nav.Link href="#pricing">

                     <NavLink className='navlink' to="/carrito">Carrito</NavLink>

                </Nav.Link>
                <Nav.Link href="#deets">

                     <NavLink className='navlink' to="/nosotros">Nosotros</NavLink>

                </Nav.Link>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>

                <div className='userNav'>
                {registro ?
                <div className='userNav'>
                    <input className='userNav-login' type="email" placeholder='Email'></input>
                    <input className='userNav-login' type="password" placeholder='password'></input>
                    <button onClick={()=> manejadorRegistro()}>submit</button>
                </div>
                : null}
                {registro ? null : 
                <i className='registro' onClick={()=> manejadorRegistro()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
              </i>}
                </div>

                </Nav>
            </Navbar.Collapse>
         </Navbar>
            
        </header>
    )
}
export default Header;