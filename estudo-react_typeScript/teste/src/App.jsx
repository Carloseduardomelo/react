import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`w-full flex items-center justify-center flex-col gap-10 bg-white`}>
      {count}

      <div className='flex gap-11 bg-slate-400 w-44 h-44'>

      <button type="button" onClick={() => {
        setCount(count + 1)
      }}>incrementar</button>
      <button type="button" onClick={() => {
        setCount(count - 1)
      }}>decrementar</button>
      </div>
    </div>
  )
}

export default App
