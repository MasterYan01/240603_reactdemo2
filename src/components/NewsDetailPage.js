import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, ListGroup } from 'react-bootstrap';
import BackButton from './BackButton'; // Import the BackButton component

const newsData = [
  {
    id: 1,
    title: "New Feature Release",
    date: "2024-06-01",
    author: "John Doe",
    content: "We have released a new feature that will enhance your productivity. More details about this feature are explained here...",
    details: "This new feature includes several improvements and new functionalities. You can now do X, Y, and Z more efficiently. The interface has been redesigned to provide a better user experience.",
    tags: ["Productivity", "Feature", "Update"],
    relatedLinks: [
      { label: "Feature Documentation", url: "https://example.com/feature-docs" },
      { label: "User Guide", url: "https://example.com/user-guide" }
    ]
  },
  {
    id: 2,
    title: "Maintenance Notice",
    date: "2024-05-20",
    author: "Jane Smith",
    content: "Scheduled maintenance on 2024-06-10. Please plan accordingly. During this time, our services will be temporarily unavailable...",
    details: "Our maintenance window will start at 2 AM UTC and last approximately 4 hours. During this time, you will not be able to access our services. We apologize for any inconvenience caused.",
    tags: ["Maintenance", "Scheduled Downtime"],
    relatedLinks: [
      { label: "Maintenance Schedule", url: "https://example.com/maintenance-schedule" },
      { label: "Support", url: "https://example.com/support" }
    ]
  },
  {
    id: 3,
    title: "Community Event",
    date: "2024-05-15",
    author: "Alice Johnson",
    content: "Join our community event on 2024-06-15 to connect with other users. This event will include several interesting activities...",
    details: "The community event will be held virtually and will include keynote speeches, Q&A sessions, and networking opportunities. Don't miss this chance to connect with other users and learn more about our platform.",
    tags: ["Community", "Event", "Networking"],
    relatedLinks: [
      { label: "Event Registration", url: "https://example.com/event-registration" },
      { label: "Event Agenda", url: "https://example.com/event-agenda" }
    ]
  },
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
              <Card.Subtitle className="mb-2 text-muted">{newsItem.date} by {newsItem.author}</Card.Subtitle>
              <Card.Text>{newsItem.details}</Card.Text>
              <h5>Tags</h5>
              {newsItem.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="mr-2">{tag}</Badge>
              ))}
              <h5 className="mt-4">Related Links</h5>
              <ListGroup>
                {newsItem.relatedLinks.map((link, index) => (
                  <ListGroup.Item key={index} action href={link.url} target="_blank">
                    {link.label}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="mt-4">
                <BackButton /> {/* Add the BackButton component here */}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetailPage;




