import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';

// class SimpleForm extends Component {
//   render() {
//     return (
//     <Container>
//       <Form>
//         <Form.Group controlId="form.Name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter name" />
//         </Form.Group>
//         <Form.Group controlId="form.Email">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Group controlId="form.Textarea">
//             <Form.Label>Comment</Form.Label>
//             <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//       </Form>
//     </Container>
//     );
//   }
       
// }

// export default SimpleForm;

