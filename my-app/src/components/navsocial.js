import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaSnapchat, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

export function Navsocial() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" target='_blank'><FaWhatsapp /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/nourelquran286/?hl=en" target='_blank'><FaInstagram /></Nav.Link>
            <Nav.Link href="#" target='_blank'><FaSnapchat /></Nav.Link>
            <Nav.Link href="https://twitter.com/ElquranNou73460" target='_blank'><FaTwitter /></Nav.Link>
            <Nav.Link href="https://web.facebook.com/profile.php?id=61552108770865" target='_blank'><FaFacebook /></Nav.Link>
            <Nav.Link href="https://mail.google.com/mail/u/0/?hl=ar#inbox" target='_blank'><FaEnvelope /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


