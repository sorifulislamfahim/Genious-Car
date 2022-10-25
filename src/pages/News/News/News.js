import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const News = () => {
    const newsDetails = useLoaderData();
    const {title, details,  image_url, category_id} = newsDetails;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/catagory/${category_id}`}>
                <Button variant="primary">All This Items</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default News;