import React from 'react'

const RemoveAllContact = (props) => {
  const handleRemoveAll=()=>{
    props.removeAll()
  }
  return (
    <div>
    <button className='btn btn-danger form-control' onClick={handleRemoveAll}>Remove All</button>
    </div>
  )
}

export default RemoveAllContact