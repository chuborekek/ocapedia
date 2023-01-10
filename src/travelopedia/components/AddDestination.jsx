import React, { useState } from 'react'
import { Col, Form, InputGroup, Row } from 'reactstrap'
import { useAddDestinationMutation } from '../api/destinationApi'

const AddDestination = () => {
  const [city,setCity]=useState('')
  const [country,setCountry]=useState('')
  const [addDestination] = useAddDestinationMutation()
  const handleAddDestination =(e)=>{
    e.preventDefault()
    const destinationObj={
      // id:Math.random*100,
      city:city,
      country:country,
      daysNeeded:Math.floor(Math.random()*10)+1,
    }
    addDestination(destinationObj)
  }
  return (
    <Row>
        <Col lg='12' className='border p-3'>
            <h4>Add Destination</h4>
            <Form className='d-flex gap-2'  onSubmit={handleAddDestination}>
                <input type="text" placeholder='Country' className='form-control' onChange={(e)=>setCountry(e.target.value)}/>
                <input type="text" placeholder='City' className='form-control ' onChange={(e)=>setCity(e.target.value)}/>
                <button type="submit" className='form-control btn btn-primary'>Add</button> 
            </Form>
        </Col>
    </Row>
  )
}

export default AddDestination