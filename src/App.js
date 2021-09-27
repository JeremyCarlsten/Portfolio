import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BsChevronDown } from 'react-icons/bs';
import { Col, Container, Row } from 'react-bootstrap';
import jeremy from './images/Jeremy.jpg'

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col id="welcome-section">
          <h1><span className='super-bold'>Hey, </span>I'm Jeremy. I develop websites</h1>
          <p className="callout"> Need one? <a href="#contact">Contact me.</a></p>
          <div id="keep-going">
            <p>Keep scrolling for more.</p>
            <BsChevronDown />
          </div>
        </Col>
      </Row>
      <Row id="about">
        <Col>
          <img src={jeremy} alt="Jeremy" className="portfolio-picture"/>
        </Col>
        <Col>
          <p>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
            doloremque. Quaerat provident commodi consectetur veniam similique ad
            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
            quasi aliquam eligendi, placeat qui corporis!</p>
        </Col>
      </Row>
    </Container>
  );
}
