import React, { useState } from 'react';
import { Modal, Form, Button, ToastContainer, Toast } from 'react-bootstrap';
import { init, sendForm } from 'emailjs-com';

import '../styles/contact-dialog.css';

const apiKeys = {
    USER_ID: process.env.REACT_APP_USER_ID,
    SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID
};

function sendEmail(event, onHide, setToastConfig) {
    const formValid = document.getElementById('contact-form').checkValidity();
    if (formValid === false) {
        return;
    } else {
        event.preventDefault();
        sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, '#contact-form')
            .then((result) => {
                setToastConfig({
                    show: true,
                    title: "Message Recived!",
                    message: "I'll be in touch soon.",
                    delay: 3000,
                    style: 'success'
                });
                onHide();
            },
                (error) => {
                    setToastConfig({
                        show: true,
                        message: "Oh, Looks like we hit a snag. Try emailing me directly: jeremy@jeremycarlsten.com",
                        style: 'danger',
                        delay: 5000
                    });
                    onHide();
                });


    }
};


export default function ContactDialog(props) {
    const [toastConfig, setToastConfig] = useState({ show: false });

    init(process.env.REACT_APP_USER_ID);

    return (
        <>
            <Modal show={props.show} backdrop='static' >
                <Modal.Body>
                    <h1>Contact</h1>
                    <Form id="contact-form">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="e.g. John Doe" id='name' name="name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" name="email" id='email' placeholder="john@email.com" />
                            <Form.Text className="text-muted">
                                I won't share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required as="textarea" id='message' name="message" rows={3} />
                        </Form.Group>
                        <Button type="submit" onClick={(e) => sendEmail(e, props.onHide, setToastConfig)}>Send</Button>
                        <Button onClick={props.onHide}>Cancel</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <ToastContainer className="p-3" position='top-end'>
                <Toast onClose={() => setToastConfig({ show: false })} show={toastConfig.show} bg={toastConfig.style} delay={toastConfig.delay} autohide>
                    <Toast.Body>
                        <h3>{toastConfig.title}</h3>
                        <p>{toastConfig.message}</p>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}