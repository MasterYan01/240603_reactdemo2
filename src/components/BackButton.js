import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <Button variant="secondary" onClick={handleBack}>
      Back
    </Button>
  );
};

export default BackButton;
