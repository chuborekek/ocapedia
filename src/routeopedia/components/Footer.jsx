import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/footer.css'

const Footer = () => {
  return <section className='footer-wrapper'>
  <Container>
      <Row>
          <Col lg='12' >
              Developed by Genevieve C. Oca
          </Col>
      </Row>
  </Container>
</section>
}

export default Footer