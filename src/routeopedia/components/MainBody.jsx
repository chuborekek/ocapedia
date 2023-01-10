import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/mainBody.css'

const MainBody = () => {
  return <section className='mainBody-wrapper'>
  <Container>
      <Row>
          <Col lg='12' >
            <h1>RouteOPedia</h1>
          </Col>
      </Row>
  </Container>
</section>
}

export default MainBody