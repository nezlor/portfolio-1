import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Lottie from 'lottie-react'
import construction from '../../images/lf30_editor_ey4t5l9z.json';
import Protect from 'react-app-protect'

// eslint-disable-next-line no-empty-pattern
export default function Portfolio({}) {
return (
   <Protect sha512='adfb6dd1ab1238afc37acd8ca24c1279f8d46f61907dd842faab35b0cc41c6e8ad84cbdbef4964b8334c22c4985c2387d53bc47e6c3d0940ac962f521a127d9f' className="1">

    <div className="container">

      <Lottie animationData={construction}/>

  </div>
  </Protect>
  )
}

