import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavDropdownDivder} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './navbar.css';

export default function CommerceNav() {
  return (
    <Navbar sticky='top' bg='light' expand='lg'>
      <NavbarBrand className='mr-auto ml-3 commerce-text-theme' href="/">
        <img 
          src='/logo.png'
          width='250px'
        />
      </NavbarBrand>
      {/* <NavbarToggle as='button' aria-controls="basic-navbar-nav" /> */}
      <Nav>
        <NavLink className='mr-sm-2' href='/'>Dashboard</NavLink>
        <NavLink className='mr-sm-2' href='/notifications'>Notifications</NavLink>
        <NavDropdown alignRight={true} title='Profile' className='mr-sm-3' href='#'>
          <NavDropdown.Item className='py-0 my-0' href='/profile'>Profile</NavDropdown.Item>
          <NavDropdown.Divider className='py-0' />
          <NavDropdown.Item className='py-0 my-0'>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}