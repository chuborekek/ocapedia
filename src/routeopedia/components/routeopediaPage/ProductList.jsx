import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
    const navigate = useNavigate()
  return <>
    <h1>Product List</h1>
    <button onClick={()=>navigate('/routeopedia/product/create')} className='p-2 m-2 btn btn-success'>
        Add Product
    </button>
  </>
}

export default ProductList