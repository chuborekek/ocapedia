import React, { useState } from 'react'
import { useDeleteDestinationMutation, useUpdateDestinationMutation } from '../api/destinationApi'

const Destination = ({item}) => {
    const [deleteDestination] = useDeleteDestinationMutation()
    const [updateDestination] = useUpdateDestinationMutation()
    const [editCity,setEditCity]=useState(item.city)
    const [editCountry,setEditCountry]=useState(item.country)
    const [isUpdating,setIsUpdating] = useState(false)
    const handleUpdate = (item)=>{
        const editDestinationObj={
            id: item.id,
            city: editCity,
            country: editCountry,
            daysNeeded: item.daysNeeded,
        }
        setIsUpdating(false)
        updateDestination(editDestinationObj)
       
    }
  return <>
    {
    !isUpdating
    ?
        <h4 key={item.id}>
        <span> {item.country}-{item.city} </span>
        <button className='btn btn-danger' onClick={()=>setIsUpdating(prev=>!prev)}>Edit</button>
        <button className='btn btn-danger' onClick={()=>deleteDestination(item.id)}>Delete</button>
        </h4>
    :
        <h4 key={item.id} className="d-flex gap-2">
        <input type="text" placeholder='Country' className='form-control' defaultValue={item.country} onChange={(e)=>setEditCountry(e.target.value)}/>
        <input type="text" placeholder='City' className='form-control ' defaultValue={item.city} onChange={(e)=>setEditCity(e.target.value)}/>
        <button className='btn btn-info' onClick={()=>handleUpdate(item)}>Save</button>
        <button className='btn btn-info' onClick={()=>setIsUpdating(prev=>!prev)}>Cancel</button>
        {/* <button className='btn btn-danger' onClick={()=>deleteDestination(item.id)}>Delete</button> */}
        </h4>
    }
</>
}

export default Destination