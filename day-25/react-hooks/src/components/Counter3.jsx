import React, { useEffect } from 'react'

const Counter3 = ({number}) => {
  useEffect(()=>{
    console.log("functional component: mounting...")
  }, [number])
  return (
    <>
    <h1>{number}</h1>
    </>
  )
}

export default Counter3