import React from 'react'
import { Form, FormGroup } from 'reactstrap'

const AddContact = (props) => {

    const handleAddContactForm =(e)=>{
        e.preventDefault();
        const contactObj={
            id: Date.now()+e.target.elements.inputPhone.value.trim(),
            name: e.target.elements.inputName.value.trim(),
            phone: e.target.elements.inputPhone.value.trim(),
            email: e.target.elements.inputEmail.value.trim(),
            isFavorite:false
        }
        props.addContact({contactObj})
        e.target.reset()
    }
  return (
    <div>
        <h3>Add A New Contact</h3>
        <Form className='border p-4' onSubmit={handleAddContactForm}>
            <div className='d-flex align-items-center justify-content-evenly'>
            <FormGroup>
                <label>Name:</label>
                <input type="text" className='w-100' name="inputName" required/>
            </FormGroup>
            <FormGroup>
                <label>Email:</label>
                <input type="email" className='w-100' name="inputEmail" required/>
            </FormGroup>
            <FormGroup>
                <label>Phone Number:</label>
                <input type="number" className='w-100' name="inputPhone" required/>
            </FormGroup>
            </div>
            <button className='btn btn-info w-100' type="submit">Create</button>
        </Form>
    </div>
  )
}

export default AddContact