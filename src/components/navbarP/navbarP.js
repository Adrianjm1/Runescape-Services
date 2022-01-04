import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

const NavbarP = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Runescape Services</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#skilling">Skilling</Nav.Link>
      <Nav.Link href="#questing">Questing</Nav.Link>
      <Nav.Link href="#Minigames">Minigames & other</Nav.Link>
      <Nav.Link href="#Services">RS3 Services</Nav.Link>
      <Nav.Link href="#Highscores">OSRS Highscores</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>
    )
}

export default NavbarP
