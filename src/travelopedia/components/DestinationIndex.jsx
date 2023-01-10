import React from 'react'
import { Col, Row } from 'reactstrap'
import AddDestination from './AddDestination'
import DestinationList from './DestinationList'

const DestinationIndex = () => {
  return <section>
        <Row>
            <Col lg='12'>
                <h1>Travel List</h1>
            </Col>
        </Row>
        <AddDestination/>
        <DestinationList/>
    </section>
}

export default DestinationIndex