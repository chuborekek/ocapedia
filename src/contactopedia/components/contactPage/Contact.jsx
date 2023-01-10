import React from 'react'
import { Col, Row } from 'reactstrap'

const Contact = ({contact,toggleFaveContact,deleteContact,editContact}) => {

    const handleToggleFavoriteContact =()=>{
        // alert('handletoggleFavoriteContact')
        toggleFaveContact(contact.id)
    }

    const handleDeleteContact =()=>{
        deleteContact(contact.id)
    }

    const handleEditContact = ()=>{
        editContact(contact.id)
    }

  return (
    <div>
    <Row>
        <Col lg='2'>
            <img src={`https://ui-avatars.com/api/?name=${contact.name}`} alt="" />
        </Col>
        <Col lg='8' className='d-flex flex-column py-2'>
            <h5>Name: {contact?.name}</h5>
            <h5>Email: {contact?.email}</h5>
            <h5>Number: {contact?.phone}</h5>
        </Col>
        <Col lg='2' className='d-flex gap-2 align-items-center'>
            <button className={`btn ${contact.isFavorite?'btn-warning':'btn-outline-warning'}`} onClick={handleToggleFavoriteContact}>
                <i className="ri-star-fill"></i>
            </button>
            <button className='btn btn-primary' onClick={handleEditContact}>
                <i className="ri-pencil-fill"></i>
            </button>
            <button className='btn btn-danger' onClick={handleDeleteContact}>
            <i className="ri-delete-bin-fill"></i>
            </button>
        </Col>
    </Row>
    </div>
  )
}

export default Contact