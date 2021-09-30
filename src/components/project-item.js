import React from 'react';
import { Col } from 'react-bootstrap';


export default function ProjectItem(props) {
    return (
        <Col className="project-item">
            <img src={props.image} alt={props.imageAlt || ""} className="project-picture" />
            <h3><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
        </Col>
    );
}