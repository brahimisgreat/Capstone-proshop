import React from 'react'
import {Navbar, Nav, Container, NavbarBrand, NavLink} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';

export default function Header() {
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand>Proshop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav  className='ms-auto'>
            <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
            <Nav.Link href='/Login'><FaUser /> Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>
    

    </header>
  )
}
