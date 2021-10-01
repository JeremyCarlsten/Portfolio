import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';
import WordFlipper from './word-flipper';
import '../styles/welcome-section.css';

export default function WelcomeSection() {

    return (
        <Row>
            <Col id="welcome-section">
                <h1><span className='super-bold'>Hey, </span>I'm Jeremy. &nbsp;I<WordFlipper /> websites </h1>
                <p className="callout"> Need one? <a href="#contact">Contact me.</a></p>
                <div id="keep-going">
                    <p>Keep scrolling for more.</p>
                    <BsChevronDown />
                </div>
            </Col>
        </Row>
    );
}