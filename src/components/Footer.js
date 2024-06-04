import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@myapp.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <Nav className="justify-content-center">
              <Nav.Link href="https://facebook.com" className="text-white">Facebook</Nav.Link>
              <Nav.Link href="https://twitter.com" className="text-white">Twitter</Nav.Link>
              <Nav.Link href="https://instagram.com" className="text-white">Instagram</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/latest-news" className="text-white">Latest News</Nav.Link>
              <Nav.Link href="/user-guide" className="text-white">User Guide</Nav.Link>
              <Nav.Link href="/contact-support" className="text-white">Contact Support</Nav.Link>
              <Nav.Link href="/feature-highlights" className="text-white">Feature Highlights</Nav.Link>
              <Nav.Link href="/community-forum" className="text-white">Community Forum</Nav.Link>
              <Nav.Link href="/api-documentation" className="text-white">API Documentation</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr className="bg-white" />
        <p className="mb-0">© 2024 MyApp. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

