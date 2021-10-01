import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';
import WordFlipper from './word-flipper';
import '../styles/welcome-section.css';
import ContactDialog from './contact-dialog';

export default function WelcomeSection() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Row>
            <Col id="welcome-section">
                <h1><span className='super-bold'>Hey, </span>I'm Jeremy. &nbsp;I<WordFlipper /> websites </h1>
                <p className="callout"> Need one? <span onClick={() => setModalShow(true)}>Contact me.</span></p>
                <div id="keep-going">
                    <p>Keep scrolling for more.</p>
                    <BsChevronDown />
                </div>
            </Col>
            <ContactDialog show={modalShow} onHide={() => setModalShow(false)} />
        </Row>
    );
}