import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ContactDialog from './contact-dialog';
import profilePicture from '../images/Jeremy.jpg'
import leanTechniques from '../images/lt-logo.png';
import iowaStudentLoan from '../images/isl-logo.svg';
import deere from '../images/jd-logo.png';

import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';

import '../styles/about.css';


export default function About() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row id="about">
      <Col md>
        <Row className="portfolio-picture">
          <img src={profilePicture} alt="Jeremy" />
        </Row>
        <Row className="social">
          <Col>
            <a className="social-item" href="https://www.facebook.com/JeremyCarlsten" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
            <a className="social-item" href="https://www.linkedin.com/in/jeremycarlsten/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className="social-item" href="https://github.com/JeremyCarlsten" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
            <FaEnvelope  className="social-item" onClick={() => setModalShow(true)} />
          </Col>
        </Row>
      </Col>
      <Col md>
        <h2> A little about myself. </h2>
        <p>
          &nbsp;Hey, I'm Jeremy. I've been developing websites since high school. 
          I always loved the idea of writing some code and having it come out the other end looking like a piece of artwork.
        </p>
        <p>
          After graduating with my associates degree from Indian Hills Community College, I was able to quickly grow my career. 
          First to the role of a senior developer, and then a team leader while working at Iowa Student Loan.
          Later, I decided it was time to learn something new, and I moved my career into the world of consulting for Lean Techniques... and the work from home lifestyle.
        </p>
        <p>
          Along the way I have met and worked with some excellent developers who have helped me not only hone my existing coding skillset; 
          but, also helped me better understand the basics of software engineering which has led me into learning all kinds of cool stuff.
        </p>
        <h2>Who I've worked for </h2>
        <Row id="logo-list">
          <Col><a href="http://www.leantechniques.com" target="_blank" rel="noopener noreferrer"><img src={leanTechniques} alt="lean techniques" className="job-logo" /></a></Col>
          <Col><a href="http://www.johndeere.com" target="_blank" rel="noopener noreferrer"><img src={deere} alt="John Deere" className="job-logo" /><br />*Contracted via Lean Techniques</a></Col>
          <Col><a href="http://www.iowastudentloan.org" target="_blank" rel="noopener noreferrer"><img src={iowaStudentLoan} alt="Iowa Student Loan" className="job-logo" /></a></Col>
        </Row>
        <h2>On a Personal Note</h2>
        <p>I am married to my beautiful wife Kayla who runs a sucessful business of her own, <a href="https://www.calamityroseranch.com">Calamity Rose Ranch</a>.
          We have five awesome kids who bring a ton of joy, and chaos, into my life.
          And a small acerage in eastern Iowa with all the animals needed to start a small petting zoo.
        </p>
      </Col>
      <ContactDialog show={modalShow} onHide={() => setModalShow(false)} />
    </Row>
  );
}
