import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>About Us</h2>
          <p>We are a tech company dedicated to providing the best user experience through our modern web applications.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

