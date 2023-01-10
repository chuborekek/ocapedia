import React from 'react'
import {getRandomData} from '../../utility/api'

const AddRandomContact = (props) => {
  const handleAddRandomContact=async()=>{
    const data = await getRandomData()
   
    const newRandomUser = {
      id: data?.data?.id,
      name: data?.data?.first_name + ' ' + data?.data?.last_name,
      phone: data?.data?.phone_number,
      email: data?.data?.email,
      isFavorite:false,
    }

    props.addRandomContact(newRandomUser)
  }
  return (
    <div>
    <button className='btn btn-primary form-control' onClick={handleAddRandomContact}>Add Random Contact</button>
    </div>
  )
}

export default AddRandomContact