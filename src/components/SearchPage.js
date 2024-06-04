import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const searchResults = getSearchResults(query);
      setResults(searchResults);
    }
  }, [query]);

  const getSearchResults = (query) => {
    const pages = [
      { title: "Latest News", content: "Find the latest updates and news here.", link: "/news" },
      { title: "User Guide", content: "Learn how to use the application effectively.", link: "/guide" },
      { title: "Contact Support", content: "Get in touch with our support team.", link: "/contact" },
      { title: "Feature Highlights", content: "Discover the features of our application.", link: "/features" },
      { title: "Community Forum", content: "Join the discussion in our community forum.", link: "/forum" },
      { title: "API Documentation", content: "Explore our API documentation.", link: "/api-docs" },
    ];

    return pages.filter(page => 
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.content.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Search Results for "{query}"</h2>
      <Row>
        {results.map((result, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>{result.content}</Card.Text>
                <Card.Link href={result.link}>Go to {result.title}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
