import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBCard as Card,
  MDBCardBody as CardBody,
  MDBCardTitle as CardTitle,
  MDBCardText as CardText,
  MDBBtn as Button
} from 'mdb-react-ui-kit';

const VenueDetails = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    const handleBookClick = () => {
      if (isLoggedIn) {
        // If user is logged in, navigate to payment page
        navigate('/payment');
      } else {
        // If user is not logged in, navigate to login page
        navigate('/login');
      }
    };
  return (
    <Container>
      <h2 className="h1-responsive font-weight-bold text-center my-4">Venue Details</h2>

      {/* Row 1 */}
      <h2>Birthday parties </h2>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
                Venue at your own home!
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/6299291/pexels-photo-6299291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
              Outdoor Picnic Area
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
             In Cafes 
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Row 2 */}
      <h2>Anniversary</h2>
      <Row className="mb-4">
      <Col md={4}>
          <Card className="mb-4">
            <CardBody> <img
              src='https://images.pexels.com/photos/2072175/pexels-photo-2072175.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='card-img-top'
              alt='Venue 1 Image'
            />  
              <CardText>
             Personal Space
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
               
               Hotel/Resort 
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
              Romantic Dinner at Home!
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      
      {/*row 3  */}
     <h2>Wedding</h2>
      <Row className="mb-4">
      <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
              Beachside Resort
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/17312689/pexels-photo-17312689/free-photo-of-cheerful-wedding-couple-against-an-ornamental-red-decoration.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
              Historic Mansion or Estate
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
            <img
              src='https://images.pexels.com/photos/17023005/pexels-photo-17023005/free-photo-of-beautifully-decorated-tables-in-a-luxury-restaurant-hall.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='card-img-top'
              alt='Venue 1 Image'
            />
              <CardText>
                Marriage Halls
              </CardText>
              <Button onClick={handleBookClick} className="w-100">Book</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VenueDetails;
