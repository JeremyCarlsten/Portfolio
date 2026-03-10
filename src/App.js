import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import WelcomeSection from './components/welcome-section'
import About from './components/about'
import Projects from './components/project-list'
import LuggagePage from './components/luggage-page'

function isLuggageRoute() {
  const { hostname, pathname } = window.location
  return hostname.includes('luggage') || pathname === '/luggage'
}

export default function App() {
  if (isLuggageRoute()) {
    return <LuggagePage />
  }

  return (
    <Container fluid>
      <WelcomeSection />
      <About />
      <Projects />
    </Container>
  )
}
