import React from "react";
import { Container, Nav, Navbar, DropdownButton, Row, Dropdown } from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" bg="info" variant="dark" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home">Hari.studios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Tatto's</Nav.Link>
              <Nav.Link href="#link">Styles</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">              
              <Dropdown.Header>
                <Row>
                <FontAwesomeIcon icon={faUserPlus} />
                </Row>
                <Row>
                #USUARIO#
                </Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
