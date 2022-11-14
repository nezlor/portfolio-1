import React from 'react';
import { Col, Row } from 'react-bootstrap';

// eslint-disable-next-line no-empty-pattern
export default function Home({}) {
return (
    <div className="container">

    <Row>
        <Col md={{span: 10, offset: 1}}>
            <div className="">
                <span className="name-animation">
                <h1>
                    David Nesbitt
                </h1>
               <span class="blink">|</span>
               </span>
                <h3>Digital Designer</h3>
                <p>
                Hey there! I'm currently curating and building my portfolio site, check back soon for updates!
                </p>
            </div>
        </Col>
         </Row>
        <Row>
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
  </div>
  )
}

