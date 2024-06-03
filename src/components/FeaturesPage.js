import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FeaturesPage = () => {
  const features = [
    { title: "Task Management", content: "Organize and manage your tasks efficiently." },
    { title: "Collaboration Tools", content: "Collaborate with your team in real-time." },
    { title: "Analytics Dashboard", content: "Track your progress with detailed analytics." },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Feature Highlights</h2>
      <Row>
        {features.map((item, index) => (
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

export default FeaturesPage;
