import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { contactList } from '../assets/data/contactList'
import '../styles/mainBody.css'
import AddContact from './contactPage/AddContact'
import AddRandomContact from './contactPage/AddRandomContact'
import EditContact from './contactPage/EditContact'
import FavoriteContact from './contactPage/FavoriteContact'
import GeneralContact from './contactPage/GeneralContact'
import RemoveAllContact from './contactPage/RemoveAllContact'

const MainBody = () => {
  const [contacts,setContacts]=useState(contactList)
  const [favoriteContacts,setFavoriteContacts]=useState(contactList.filter(item=>item.isFavorite===true))
  const [generalContacts,setGeneralContacts]=useState(contactList.filter(item=>item.isFavorite===false))
  const [isUpdating,setIsUpdating]=useState(false)
  const [currentEditContactInfo,setCurrentEditContactInfo]=useState([])

  const addContact=({contactObj})=>{
   contacts?setContacts(contact=>[...contact,contactObj]):setContacts([contactObj])
    // console.log(contacts)
  }

  useEffect(()=>{
    const currentFavoriteContacts = contacts?.filter(item=>item.isFavorite===true)
    setFavoriteContacts(prev=>currentFavoriteContacts)
    const currentGeneralContacts = contacts?.filter(item=>item.isFavorite===false)
    setGeneralContacts(prev=>currentGeneralContacts)

  },[contacts])

  const toggleFavoriteContact = (id)=>{
    setContacts(contacts.map(item=>item.id===id?{...item,isFavorite:!item.isFavorite}:{...item}))
  }

  const deleteContact = (id) =>{
    setContacts(contacts.filter(item=>item.id!==id))
  }
  
  const removeAll = ()=>{
    setContacts(prev=>{})
    
  }

  const addRandomContact=(newRandomUser)=>{
    // console.log(newRandomUser)
    contacts?setContacts(contact=>[...contact,newRandomUser]):setContacts([newRandomUser])
  }

  const editContact = (id)=>{
    setIsUpdating(prev=>true)
    setCurrentEditContactInfo(contacts.filter(item=>item.id===id))

  }

  const saveEditContact = (contactObj) =>{
    //console.log(contactObj)
    setContacts(contacts.map(item=>item.id===contactObj.id?contactObj:item))
    setIsUpdating(prev=>false)
  }

  const cancelUpdating = ()=>{
    setIsUpdating(prev=>false)
  }
  return <section className='mainBody-wrapper'>
  <Container>
      <Row>
          <Col lg='12' className='py-2'>
            <h1>ContactOpedia</h1>
          </Col>
      </Row>
      {!isUpdating && <Row>
          <Col lg='6' className='py-2'>
            <AddRandomContact addRandomContact={addRandomContact}/>
          </Col>
          <Col lg='6' className='py-2'>
            <RemoveAllContact removeAll={removeAll}/>
          </Col>
      </Row>
      }
      <Row>
          <Col lg='12' className='py-2'>
            {
            !isUpdating
            ?<AddContact addContact={addContact}/>
            :<EditContact cancelUpdating={cancelUpdating} saveEditContact={saveEditContact} currentEditContactInfo={currentEditContactInfo}/>
            }
          </Col>
      </Row>
      
      {!isUpdating && 
      <Row>
          <Col lg='12' className='py-2'>
            <FavoriteContact contacts = {favoriteContacts} toggleFavoriteContact={toggleFavoriteContact} deleteContact={deleteContact} editContact={editContact}/>
          </Col>
      </Row>
      }
       {!isUpdating && 
      <Row>
          <Col lg='12' className='py-2'>
            <GeneralContact contacts = {generalContacts} toggleFavoriteContact={toggleFavoriteContact} deleteContact={deleteContact}  editContact={editContact}/>
          </Col>
      </Row>
      }
  </Container>
</section>
}

export default MainBody