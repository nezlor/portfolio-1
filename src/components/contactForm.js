import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p25o7ra', 'template_tqslss4', form.current, 'uLZwdoh40vrUE9oKf')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <Row>
      <Col sm={{span: 8, offset: 2}} className="text-center mb-4">
          <h1>Contact Me</h1>
          <p>Hi</p>
        </Col>
      </Row>
    <Row>
    <Col sm={{span: 8, offset: 2}}>
    <div className="form-label-group">
      <input type="text" name="user_name" id="Name" placeholder='Name' required className="form-control"/>
      <label for="Name">Name</label>
      </div>
      </Col>

      <Col sm={{span: 8, offset: 2}}>
      <div className="form-label-group">
      <input type="email" id="Email"  className="form-control" name="user_email" placeholder="Email" required />
      <label for="Email">Email</label>
      </div>
      </Col>
      <Col sm={{span: 8, offset: 2}}>
      <div className="form-label-group">
      <textarea name="message" id="message" placeholder='Message' className="form-control" required/>
      <label for="Message">Message</label>
      </div>
</Col>
      <Col sm={{span: 8, offset: 2}}>
      <input className="btn-submit" type="submit" value="Send" />
      </Col>
      <Col>
      <div className="social-container">
          <span className="social-header">Find me on:</span>
          <span className="separator"></span>
  <ul className="social-icons">
      <li><a href="https://www.instagram.com/nezlor/" target="_blank"  rel="noreferrer" ><i className="fa fa-instagram"></i></a></li>
      <li><a href="https://twitter.com/nezlor" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/davenesbitt7/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
  </ul>
</div>
</Col>
         </Row>
    </form>

  );
};

export default ContactUs;