import React from 'react'
import { Col, Form, FormGroup, InputGroup, Row } from 'reactstrap'

const AddMovie = (props) => {

    const handleAddMovieForm =(e)=>{
        e.preventDefault()
        props.addMovie(e.target.elements.inputMovie.value)
        e.target.reset()
    }

  return <section>
        <Row>
            <Col lg='12' className='pt-3'>
                <h4>Add Movie</h4>
            </Col>
            <Form lg='12' className='p-3 d-flex gap-2' onSubmit={handleAddMovieForm}>
                    <input type="text" placeholder='Movie Name...' className='w-100' name="inputMovie"/>
                    <button className='btn btn-success w-50' >Add</button>
            </Form>
        </Row>

  </section>
}

export default AddMovie;