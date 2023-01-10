import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementMultiplier,decrementMultiplier } from '../redux/slice/counterSlice'

const Counter = () => {
    const count = useSelector(state=>state.counterStore.count)
    const dispatch = useDispatch()
    const [multiplier,setMultiplier]=useState(1)

   
  return <>
   
     <h1>Counter: {count}</h1>
    <button className='btn btn-primary' onClick={()=>dispatch(incrementMultiplier({multiplier}))}>+</button>
    <input type="number" placeholder='multiplier...' value={multiplier} onChange={(e)=>setMultiplier(e.target.value)}/>
    <button className='btn btn-primary' onClick={()=>dispatch(decrementMultiplier({multiplier}))}>-</button>
    </>
}

export default Counter