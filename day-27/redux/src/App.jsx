import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './component/Navbar'
import { decrement, increment } from './counter/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar/>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
       currently count is {count}
       <button onClick={()=>dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
