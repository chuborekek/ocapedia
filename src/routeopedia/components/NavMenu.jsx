import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return <>
      <Navbar className='navbar navbar-expand-lg' style={{backgroundColor:'orange'}}>
        <NavbarBrand href="/">RouteOPedia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/routeopedia/home" className='nav-link'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/routeopedia/about" className='nav-link'>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/routeopedia/crypto/eth/2" className='nav-link'>Crypto</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right style={{backgroundColor:'orange'}}>
                <DropdownItem><Link to='/routeopedia/product/' className='nav-link'>Product</Link></DropdownItem>
                <DropdownItem><Link to='/routeopedia/product/create' className='nav-link'>Create Product</Link></DropdownItem>
                <DropdownItem><Link to='/routeopedia/product/details/19' className='nav-link'>Product Details</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to='/routeopedia/product/list' className='nav-link'>Product List</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> 
          </Nav>
          <NavbarText>Chu Borekek</NavbarText>
        </Collapse>
      </Navbar>
</>
}

export default NavMenu