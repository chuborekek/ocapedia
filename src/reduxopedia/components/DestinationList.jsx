import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destinationClicked } from '../redux/slice/destinationSlice' 


const DestinationList = () => {
    const destinations = useSelector(state=>state.destinationStore.destinations)
    const dispatch = useDispatch()
    const destinationDetails=useSelector(state=>state.destinationStore.destinationSelected)
    console.log(destinationDetails)
    const handleSelectedDestination=dest=>{
        dispatch(destinationClicked({dest:dest}))
    }
  return <>
    <h1>DestinationList</h1>
    <div className='m-4 '>
    {destinations.map((item,index)=>(
            <h4 key={index} >Name: {item.name}
            <button className='btn btn-success' onClick={()=>handleSelectedDestination(item)}>Details</button>
            </h4>   
    ))}
    </div>

    {
        destinationDetails &&
        <div>
            <h4>Name: {destinationDetails.name}</h4>
            <h4>Days: {destinationDetails.days}</h4>
            <h4>Fact: {destinationDetails.fact}</h4>
        </div>
    }
    </>
}

export default DestinationList