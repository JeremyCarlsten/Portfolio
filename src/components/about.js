import React from 'react';
import { Col, Row } from 'react-bootstrap';
import profilePicture from '../images/Jeremy.jpg'
import leanTechniques from '../images/lt-logo.png';
import iowaStudentLoan from '../images/isl-logo.svg';
import deere from '../images/jd-logo.png';

import '../styles/about.css';


export default function About() {
  return (
    <Row id="about">
      <Col className="portfolio-picture" md>
        <img src={profilePicture} alt="Jeremy" />
      </Col>
      <Col md>
        <h2> A little about myself. </h2>
        <p>
          &nbsp;Hey, I'm Jeremy. I've been developing websites since high school.
          I love the idea of writing some code and having it come out
          the other end looking like a piece of artwork.
        </p>
        <p>
          They are great people who helped me not only hone my existing coding skillset; but,
          also helped me to better understand the basics of software engineering which has 
          lead me to a fantastic career learning all kinds of cool stuff.
        </p>
        <p>
          Quickly, I was able to grow in my career, first to the role of a senior developer, and then a team leader while working at Iowa Student Loan.
          Later, I decided it was time to learn something new, and I moved my career into the world of consulting for Lean Techniques.
        </p>
        <h3>Who I've worked for </h3>
        <Row id="logo-list">
          <Col><a href="http://www.leantechniques.com" target="_blank" rel="noopener noreferrer"><img src={leanTechniques} alt="lean techniques" className="job-logo" /></a></Col>
          <Col><a href="http://www.johndeere.com" target="_blank" rel="noopener noreferrer"><img src={deere} alt="lean techniques" className="job-logo" /></a></Col>
          <Col><a href="http://www.iowastudentloan.org" target="_blank" rel="noopener noreferrer"><img src={iowaStudentLoan} alt="lean techniques" className="job-logo" /></a></Col>
        </Row>
        <h3>On a Personal Note</h3>
        <p>I am married to my beautiful wife Kayla who runs a sucessful business of her own, <a href="https://www.calamityroseranch.com">Calamity Rose Ranch</a>. 
        We have five pretty awesome kids, a small acerage in eastern Iowa with all the animals needed to start a small petting zoo.</p>
      </Col>
    </Row>
  );
}
