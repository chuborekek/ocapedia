import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/mainBody.css'
import MoviePage from './moviePage/MoviePage'

const MainBody = () => {
  return <section className='mainBody-wrapper'>
  <Container>
      <Row>
          <Col lg='12' >
            <MoviePage/>
          </Col>
      </Row>
  </Container>
</section>
}

export default MainBody