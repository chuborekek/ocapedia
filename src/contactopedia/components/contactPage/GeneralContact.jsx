import React from 'react'
import Contact from './Contact'

const GeneralContact = (props) => {
  return (
    <div>
    <h3>General Contacts</h3>
    {
        props.contacts?.map((item,index)=>(
            <Contact contact={item} key={index} toggleFaveContact={props.toggleFavoriteContact} deleteContact={props.deleteContact}  editContact={props.editContact}/>
        ))
    }
    </div>
  )
}

export default GeneralContact