import React from 'react';
import { Container, Navbar } from 'react-bootstrap';


export default function Header() {
  return <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">PokeApp</Navbar.Brand>
    </Container>
  </Navbar>;
}
