import React from 'react'
import Nav from '../../components/Nav1/Nav'
import NavB from '../../components/Nav2/NavB'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './dashboard.css'

export default function Dashboard() {

  const images = [{
     

      image: "../public/dash1.jpg",
      title : "Full Stack Placement Guarantee Program",
      text : "Learn from top mentors of IIT Kharagpur, Myntra and get CTC upto 25 LPA",
      button: <button className='btn btn-sm btn-primary float-end'>View Details</button>
    },{
      image: "../public/dash2.jpg",
      title : "Data Science Placement Guarantee course",
      text : "Course prepared by top 1% Data Scientists. Take the entrance test to get apply:",
      button: <button className='btn btn-sm btn-primary float-end'>View Details</button>

    },
    {
      image: "../public/dash3.png",
      title : "",
      text : "",
      button: <button className='btn btn-sm btn-primary float-end'>View Details</button>

    },
    {
      image: "../public/dash4.jpg",
      title : "Pay After Placement (PAP)",
      text : "This is for students who are already skilled and looking for direct placement service. Only selected students will be given a chance.",
      button: <button className='btn btn-sm btn-primary float-end'>View Details</button>

    }
   
  
  
    
  ]
  console.log(images.image)


  return (
   <>
   <div className='dashboard'>
   <Row xs={1} md={2} className="g-4">
      {images.map((_, idx) => (
        <Col key={idx}>
          <Card >
            <Card.Img variant="top" src={images[idx].image}   style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Title>{images[idx].title}</Card.Title>
              <Card.Text>
                {images[idx].text}
              </Card.Text>
              <Card.Text>{images[idx].button}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   </div>
    
   
   </>
  )
}
