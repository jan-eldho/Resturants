import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({displayCard}) {
  return (
    <>
      <Link to={`/resturant_view/${displayCard?.id}`} style={{ textDecoration: 'none' }}>
        <Card className='p-2' style={{ width: '250px', maxWidth: '18rem' }}>
          <Card.Img
            variant="top"
            src={displayCard.photograph}
            style={{ height: '250px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title className='text-center text-warning'>{displayCard.name.slice(0,12)}...</Card.Title>
            <Card.Text className='text-center'>
              Neighbor hood: <span className='text-warning ms-2'>{displayCard.neighborhood}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default RestCard;
