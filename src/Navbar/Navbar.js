import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Navbar.css'

 function Navbar() {
  
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm '>
     <Container>
        <h4 className='d-flex align-items-center mt-1'>Ibrahim</h4>
        <Nav className='mr-auto'>
            <Nav.Link className='effect' as={Link} to='/'>Home</Nav.Link> 
            <Nav.Link className='effect' as={Link} to='/play'>Game</Nav.Link>
            <Nav.Link className='effect' as={Link} to='/Resume'>Resume</Nav.Link>
           
        </Nav>
     
     </Container>
    </NavbarBs>
  )
}
export default Navbar