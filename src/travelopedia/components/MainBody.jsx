import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/mainBody.css'
import DestinationIndex from './DestinationIndex'

const MainBody = () => {
  return <section className='mainBody-wrapper'>
  <Container>
      <Row>
          <Col lg='12' >
           <DestinationIndex/>
          </Col>
          
      </Row>
  </Container>
</section>
}

export default MainBody