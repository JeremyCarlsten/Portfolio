import React from 'react';
import { Col } from 'react-bootstrap';


export default function ProjectItem(props) {
    return (
        <Col className="project-item">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt={props.imageAlt || ""} className="project-picture" />
                <h3>{props.title}</h3>
            </a>
        </Col>
    );
}