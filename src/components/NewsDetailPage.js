import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const newsData = [
  { id: 1, title: "New Feature Release", date: "2024-06-01", content: "We have released a new feature that will enhance your productivity. More details about this feature are explained here..." },
  { id: 2, title: "Maintenance Notice", date: "2024-05-20", content: "Scheduled maintenance on 2024-06-10. Please plan accordingly. During this time, our services will be temporarily unavailable..." },
  { id: 3, title: "Community Event", date: "2024-05-15", content: "Join our community event on 2024-06-15 to connect with other users. This event will include several interesting activities..." },
];

const NewsDetailPage = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <Container className="mt-5">
        <h2 className="text-center">News not found</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>{newsItem.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{newsItem.date}</Card.Subtitle>
              <Card.Text>{newsItem.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetailPage;

