import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

  const addValue = ()=>{
    if(count<20){
      setCount(count+1)
    }
  }

  const decreaseCount = ()=>{
    if(!count<=0){
      setCount(count-1)
    }
  }

  return (
    <>
     <h1>Hey there!</h1>
    <p>counter value: {count}</p>
    <button onClick={addValue}>increment</button><br /><br />
    <button onClick={decreaseCount}>decrease</button>
    </>
  )
}

export default Counter