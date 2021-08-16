import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

function Navigasi() {
  return (
    <>
      <Navbar collapseOnSelect bg="primary" expand="md" variant="dark">
        <Container>
          <Image src={logo} style={{ height: 40 }} />
          <Link to="/" className="navbar-brand">
            React App
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Beranda
              </Link>
              <Link to="/manajemen-buku" className="nav-link">
                Manajemen Buku
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
