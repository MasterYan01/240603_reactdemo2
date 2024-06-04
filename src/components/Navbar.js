import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AppNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchQuery}`);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">Latest News</Nav.Link>
            <Nav.Link href="/guide">User Guide</Nav.Link>
            <Nav.Link href="/contact">Contact Support</Nav.Link>
            <Nav.Link href="/features">Feature Highlights</Nav.Link>
            <Nav.Link href="/forum">Community Forum</Nav.Link>
            <Nav.Link href="/api-docs">API Documentation</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

