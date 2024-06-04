import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const news = [
  { id: 1, title: "New Feature Release", date: "2024-06-01", content: "We have released a new feature that will enhance your productivity." },
  { id: 2, title: "Maintenance Notice", date: "2024-05-20", content: "Scheduled maintenance on 2024-06-10. Please plan accordingly." },
  { id: 3, title: "Community Event", date: "2024-05-15", content: "Join our community event on 2024-06-15 to connect with other users." },
];

const NewsPage = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Latest News</h2>
      <Row>
        {news.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                <Card.Text>{item.content}</Card.Text>
                <Button variant="primary" as={Link} to={`/news/${item.id}`}>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsPage;




