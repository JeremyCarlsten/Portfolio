import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import WelcomeSection from './components/welcome-section';
import About from './components/about';

export default function App() {
  return (
    <Container fluid>
        <WelcomeSection />
        <About />
    </Container>
  );
}
