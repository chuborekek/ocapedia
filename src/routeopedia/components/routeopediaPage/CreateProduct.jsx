import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    const navigate = useNavigate()
  return <>
    <h1>Create Product</h1>

    <button onClick={()=>navigate(-1)} className='p-2 m-2 btn btn-success'>
        Go Back
    </button>
  </>
}

export default CreateProduct