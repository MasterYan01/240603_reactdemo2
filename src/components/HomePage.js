import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col md={8} className="mx-auto">
          <h1>Welcome to MyApp</h1>
          <p className="lead">This is the homepage of MyApp. Navigate through the menu to explore more features.</p>
          <Button variant="primary" href="/login">Get Started</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Latest News</Card.Title>
              <Card.Text>
                Stay updated with the latest news and updates from MyApp. Click the button below to read more.
              </Card.Text>
              <Button variant="info" href="/news">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>User Guide</Card.Title>
              <Card.Text>
                New to MyApp? Check out our user guide to get started quickly and make the most out of our features.
              </Card.Text>
              <Button variant="success" href="/guide">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Support</Card.Title>
              <Card.Text>
                Need help? Our support team is here to assist you. Click the button below to get in touch with us.
              </Card.Text>
              <Button variant="warning" href="/contact">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Feature Highlights</Card.Title>
              <Card.Text>
                Explore the key features of MyApp that help you stay productive and organized.
              </Card.Text>
              <Button variant="dark" href="/features">Explore Features</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Community Forum</Card.Title>
              <Card.Text>
                Join the MyApp community forum to discuss and share ideas with other users.
              </Card.Text>
              <Button variant="secondary" href="/forum">Join Forum</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>API Documentation</Card.Title>
              <Card.Text>
                Developers, check out our comprehensive API documentation to integrate MyApp with your projects.
              </Card.Text>
              <Button variant="light" href="/docs">View Docs</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
