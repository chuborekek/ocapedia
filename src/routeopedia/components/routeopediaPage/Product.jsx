import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
  return <>
    <h1>Product</h1>

    <button onClick={()=>navigate('/routeopedia/product/create')} className='p-2 m-2 btn btn-success'>
        Add Product
    </button>

    <Link to='/routeopedia/product/details/19'>
    <button className='p-2 btn btn-info'>
        Go to Product#19
    </button>
    </Link>

    {/* Navigate component will automatically navigate to the path, make sure to put / on start of path to append on root link,if / is not on the start of path it will just append to current url path */}
    {/* <Navigate to="/routeopedia/product/details/33"></Navigate> */}
    </>
}

export default Product