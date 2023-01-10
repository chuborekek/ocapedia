import React from 'react'
import { Col, Row } from 'reactstrap'

const MovieList = (props) => {
  return <section>
    <Row>
      <Col lg='12'>
        {
          props.movieList.map(movie=><h5>{movie}</h5>)
        }
      </Col>
    </Row>
  </section>
}

export default MovieList