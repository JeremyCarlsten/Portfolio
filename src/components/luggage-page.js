import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaSms } from 'react-icons/fa'
import '../styles/luggage-page.css'

const luggageConfig = {
  name: process.env.REACT_APP_LUGGAGE_NAME,
  email: process.env.REACT_APP_LUGGAGE_EMAIL,
  phone: process.env.REACT_APP_LUGGAGE_PHONE
}

export default function LuggagePage() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      if (meta.parentNode) {
        document.head.removeChild(meta)
      }
    }
  }, [])

  return (
    <Container fluid className="luggage-page">
      <div className="luggage-bg" aria-hidden="true" />
      <Row className="luggage-content">
        <Col>
          <span className="luggage-emoji" role="img" aria-label="luggage">🧳</span>
          <h1 className="luggage-thank-you">Thank you!</h1>
          <p className="luggage-intro">
            If you found this luggage, I really appreciate you taking the time to help get it back.
          </p>
          <p className="luggage-subtitle">Please reach out—I&apos;d love to hear from you.</p>
          <div className="luggage-contact">
            {luggageConfig.name && <h2>{luggageConfig.name}</h2>}
            {luggageConfig.email && (
              <a href={`mailto:${luggageConfig.email}`} className="luggage-contact-item">
                <FaEnvelope /> {luggageConfig.email}
              </a>
            )}
            {luggageConfig.phone && (
              <div className="luggage-contact-item luggage-phone-row">
                <a href={`tel:${luggageConfig.phone.replace(/\D/g, '')}`} aria-label="Call">
                  <FaPhone />
                </a>
                <a href={`sms:${luggageConfig.phone.replace(/\D/g, '')}`} aria-label="Send text">
                  <FaSms />
                </a>
                <span>{luggageConfig.phone}</span>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
