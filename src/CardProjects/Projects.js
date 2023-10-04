import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Projects.css'
import img from '../99.png'
import img2 from '../66.png'
import img3 from '../55.png'

const Projects = () => {
  const projects = [
    {
      title: 'Movies app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: img,
    },
    {
      title: 'Shopping Cart',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: img2,
    },
    {
      title: 'Cars project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: img3,
    },
  ];

  return (
    <div className='container'>
      <h1>Projects</h1>
      <div className='row'>
        {projects.map((project, index) => (
          <div className='col-md-4' key={index}>
            <Card className='custom-card'>
              <div className='card-image'>
                <Card.Img variant='top' src={project.image} style={{height:'190px'}} alt={project.title} />
                <div className='hover-overlay'></div>
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant='primary'> More Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;