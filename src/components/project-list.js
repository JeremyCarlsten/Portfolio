import React from 'react';
import { Row } from 'react-bootstrap';
import ProjectItem from './project-item';
import calamityRoseRanch from '../images/projects/calamityroseranch.png'
import horseTackDatabase from '../images/projects/horsetackdatabase.png'
import sourdoughsimplified from '../images/projects/sourdoughsimplified.jpg'
import '../styles/project-list.css';

function getProjects() {
  return projectConfig.map((config, index) => {
    return <ProjectItem {...config} key={index} />
  });
}

export default function ProjectList() {
  return (
    <Row id="project-list">
      <h1>Sites I Manage</h1>
      <Row>
        {getProjects()}
      </Row>
    </Row>
  );
}

const projectConfig = [
  {
    title: "Calamity Rose Ranch",
    image: calamityRoseRanch,
    url: 'http://www.calamityroseranch.com'
  },
  {
    title: "Horse Tack Database",
    image: horseTackDatabase,
    url: 'http://www.horseTackDatabase.com'
  },
  {
    title: "Sourdough Simplified",
    image: sourdoughsimplified,
    url: 'http://www.sourdoughsimplified.net'
  },
  

]