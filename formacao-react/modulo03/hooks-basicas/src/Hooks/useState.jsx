import { useState } from 'react'


const UserState = () => {
  const [count, setCount] = useState(0) //! com o useState nos consiguinos manipular o estados de uma compomente.

  const soma =  () =>{  //! nessa function eu eu estou tracando o valor do useState.
    setCount(prev => prev += 1) 
  } 

  return (
  <div>
    <h1>UseStates</h1>
      <p>{count}</p>
      <button type="button" onClick={soma}>soma</button>
  </div>
  )
}

export default UserState