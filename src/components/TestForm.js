import './TestForm.css';
import React, { Component} from 'react';
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button, Col, Row, Container} from 'react-bootstrap';

class TestForm extends Component {
  render() {
    return (
      
    <Container>
           
<Form>
<Row className="mb-3">
   <Form.Group as={Col} controlId="formFirstName">
      <Form.Label ClassNa="label">First Name</Form.Label>
         <Form.Control type="text" name="firstName"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formLastName">
      <Form.Label className="label">Last Name</Form.Label>
         <Form.Control type="text" name="lastName"/>
     </Form.Group>
</Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group   className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Address" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
                                <Form.Control as="select" name="state">
                                    <option value="AL">Tunis</option>
                                    <option value="AK">Nabeul</option>
                                    <option value="AZ">Bizert</option>
                                    <option value="AR">Sousse</option>
                                    <option value="CA">Monastir</option>
                                    <option value="CO">Jendouba</option>
                                    <option value="CT">Beja</option>
                                    <option value="DE">ElKef</option>
                                    <option value="DC">Kairaouen</option>
                                    <option value="FL">Gafsa</option>
                                    <option value="GA">Gabes</option>
                                    <option value="HI">Tozeur</option>
                                    <option value="ID">Sfax</option>
                                    <option value="IL">Tataouin</option>
                                    <option value="IN">Siliana</option>
                                  
                                </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group  as={Col} className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
</Container>
);
}     
}

export default TestForm;
