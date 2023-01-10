import React from 'react'
import { Form, FormGroup } from 'reactstrap'

const EditContact = (props) => {

    const handleEditContactForm=(e)=>{
        e.preventDefault();
        const contactObj={
            id: props?.currentEditContactInfo[0].id,
            name: e.target.elements.inputName.value.trim(),
            phone: e.target.elements.inputPhone.value.trim(),
            email: e.target.elements.inputEmail.value.trim(),
            isFavorite:props?.currentEditContactInfo[0].isFavorite,
        }
        e.target.reset()
        props.saveEditContact(contactObj)
        
    }
  return (
    <div>
        <h3>Edit Contact</h3>
        <Form className='border p-4' onSubmit={handleEditContactForm}>
            <div className='d-flex align-items-center justify-content-evenly'>
            <FormGroup>
                <label>Name:</label>
                <input type="text" className='w-100' name="inputName" defaultValue={props?.currentEditContactInfo[0]?.name} required/>
            </FormGroup>
            <FormGroup>
                <label>Email:</label>
                <input type="email" className='w-100' name="inputEmail" defaultValue={props?.currentEditContactInfo[0]?.email} required/>
            </FormGroup>
            <FormGroup>
                <label>Phone Number:</label>
                <input type="number" className='w-100' name="inputPhone" defaultValue={props?.currentEditContactInfo[0]?.phone} required/>
            </FormGroup>
            </div>
            <button className='btn btn-info w-100' type="submit">Update</button>
        </Form>
        <button className='btn btn-success w-100' onClick={()=>props.cancelUpdating()}>Cancel</button>
    </div>
  )
}

export default EditContact