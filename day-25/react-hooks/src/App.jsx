import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hey there!</h1>
    <p>counter value: 1</p>
    <button>increment</button><br /><br />
    <button>decrease</button>
    </>
  )
}

export default App
