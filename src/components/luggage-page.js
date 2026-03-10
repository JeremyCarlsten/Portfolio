import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookSquare } from 'react-icons/fa'
import '../styles/luggage-page.css'

const luggageConfig = {
  name: process.env.REACT_APP_LUGGAGE_NAME,
  email: process.env.REACT_APP_LUGGAGE_EMAIL,
  phone: process.env.REACT_APP_LUGGAGE_PHONE,
  address: process.env.REACT_APP_LUGGAGE_ADDRESS,
  facebook: process.env.REACT_APP_LUGGAGE_FACEBOOK
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
      <Row className="luggage-content">
        <Col>
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
              <a href={`tel:${luggageConfig.phone.replace(/\D/g, '')}`} className="luggage-contact-item">
                <FaPhone /> {luggageConfig.phone}
              </a>
            )}
            {luggageConfig.address && (
              <p className="luggage-contact-item luggage-address">
                <FaMapMarkerAlt />
                <span>{luggageConfig.address}</span>
              </p>
            )}
            {luggageConfig.facebook && (
              <a href={luggageConfig.facebook} target="_blank" rel="noopener noreferrer" className="luggage-social-link" aria-label="Facebook">
                <FaFacebookSquare />
              </a>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
