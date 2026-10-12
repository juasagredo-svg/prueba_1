import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardBody from '../molecules/card';

function ProductCard({ movie }) {
  const navigate = useNavigate();

  const detailsPath = `/movies/${movie.id}`;

  return (
    <Card className="m-2">
      <Card.Body>
        <CardBody
          link={detailsPath}
          imageSrc={movie.Image}
          name={movie.name}
          info={movie.info}
          shortDesc={movie.shortDesc}
        />

        
      </Card.Body>
    </Card>
  );
}

export default ProductCard;