import React from 'react'
import { useGetAllDestinationQuery } from '../api/destinationApi'
import { useGetRandomDestinationQuery } from '../api/randomDestinationApi'
import Destination from './Destination'

const DestinationList = () => {
  const {data,isLoading,isSuccess,isError,error} = useGetAllDestinationQuery()
  const {data:randomDestinationData}=useGetRandomDestinationQuery()
  //console.log(data)
  console.log(randomDestinationData);
 return <>
    <h3 className='py-3 text-center'>List of Destinations</h3>
    <div className='text-center'>
      {
      data?.map(item=>(
        <Destination item={item} key={item.id}/>
      ))
      }
    </div>
    <div>
      <h3 className='py-3 text-center'>Random Suggested Destination</h3>
      <h4>Country: {randomDestinationData?.country}</h4>
      <h4>City: {randomDestinationData?.city}</h4>
    </div>
    </>
}

export default DestinationList