import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="mt-5">
      {/* <Row className="text-center mb-5">
        <Col md={8} className="mx-auto">
          <h1>Welcome to MyApp</h1>
          <p className="lead">This is the homepage of MyApp. Navigate through the menu to explore more features.</p>
          <Button variant="primary" href="/login">Get Started</Button>
        </Col>
      </Row> */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Carousel interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+1"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Welcome to MyApp</h3>
                <p className="lead">This is the homepage of MyApp. Navigate through the menu to explore more features.</p>
                <Button variant="primary" href="/login">Get Started</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+2"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second Slide</h3>
                <p>Learn how to get the most out of MyApp.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+3"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third Slide</h3>
                <p>Connect with our support team for help.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+4"
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Fourth Slide</h3>
                <p>Join our community forum to discuss and share.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+5"
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3>Fifth Slide</h3>
                <p>Explore the detailed API documentation.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
      </Row><Row className="mb-4">
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
