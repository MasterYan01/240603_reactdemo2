import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GuidePage = () => {
  const guides = [
    { title: "Getting Started", content: "Learn how to get started with MyApp quickly and efficiently." },
    { title: "Advanced Features", content: "Discover the advanced features of MyApp and how to use them." },
    { title: "Troubleshooting", content: "Find solutions to common issues and get back on track." },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">User Guide</h2>
      <Row>
        {guides.map((item, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GuidePage;
