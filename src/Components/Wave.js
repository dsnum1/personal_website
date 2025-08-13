import React from 'react'
import './Wave.css'
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



const Wave = () => {
  return (
    <div className='wave-holder'>
      <Container className="text-holder">
        <Row>
          <Col className="pull-right">
            <h1>Wave at me !</h1>
            <ContactUs></ContactUs>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    emailjs.sendForm('service_rgfxvnf', 'template_natom0s', e.target, 'lg32-QKSjFZtX0SZX')
      .then((result) => {
        window.alert("Your wave has been sent 😄")
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });

    
  }

  return (
    <>
    <Form onSubmit={sendEmail} className="wave-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" name='from_name' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='from_email'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" placeholder="Any Message" name='message'/>
      </Form.Group>




      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </>
  );
}


function WaveForm() {
  return (
    <>

    </>
  );
}






export default Wave