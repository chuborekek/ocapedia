import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import AddMovie from './AddMovie'
import MovieList from './MovieList'

const MoviePage = () => {
    const [movieList,setMovieList]=useState(['Harry Potter','Saw V'])
    
    const addMovie=(movie)=>{
        setMovieList(item=>[...item,movie])
    }
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='border'>
                <AddMovie addMovie={addMovie}/>
            </Col>
            <Col lg='12' className='pt-3'>
                <h4>Movie List</h4>
                <MovieList movieList={movieList}/>
            </Col>
        </Row>
    </Container>
</section>
}

export default MoviePage