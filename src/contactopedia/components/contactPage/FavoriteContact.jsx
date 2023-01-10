import React from 'react'
import Contact from './Contact'

const FavoriteContact = (props) => {
  return (
    <div>
    <h3>Favorite Contacts</h3>
    {
        props.contacts?.map((item,index)=>(
            <Contact contact={item} key={index} toggleFaveContact={props.toggleFavoriteContact} deleteContact={props.deleteContact}  editContact={props.editContact}/>
        ))
    }
    </div>
  )
}

export default FavoriteContact