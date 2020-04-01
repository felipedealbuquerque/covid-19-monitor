import React, {Component} from 'react'
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'
import { FaLaptopMedical } from "react-icons/fa";

class Header extends Component {
    render () {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <FaLaptopMedical /> COVID-19 Monitor
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#globalNumbers">Global Numbers</Nav.Link>
            <Nav.Link href="#Countries">Countries</Nav.Link>
            <Nav.Link href="#pricing">Tips and important numbers</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      );
    }
  }
export default Header