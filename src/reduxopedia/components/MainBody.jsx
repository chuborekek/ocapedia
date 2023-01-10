import React from 'react'
import { useDispatch } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import '../styles/mainBody.css'
import Counter from './Counter'
import DestinationList from './DestinationList'
import { resetApp } from '../redux/action/action'


const MainBody = () => {
const dispatch = useDispatch()
  const handleReset = ()=>{
    dispatch(resetApp())
  }
  return <section className='mainBody-wrapper'>
  <Container>
      <Row>
         
          <Col lg='12' >
            <h1>ReduxOPedia</h1>
          </Col>
          <h4><button onClick={handleReset}>Reset APP</button></h4>
          <Col lg='12' >
            <Counter/>
          </Col>
          <Col lg='12' >
            <DestinationList/>
          </Col>
      </Row>
  </Container>
</section>
}

export default MainBody