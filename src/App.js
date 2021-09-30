import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import WelcomeSection from './components/welcome-section';
import About from './components/about';
import Projects from './components/projects';

export default function App() {
  return (
    <Container fluid>
        <WelcomeSection />
        <About />
        <Projects />
    </Container>
  );
}
