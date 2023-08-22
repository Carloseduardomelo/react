import { ContApp , ContInput } from './style/styled'
import Herader from './components/hearder/hearder'
import Repos from './components/repositorios/repositorios'
import InputButton from './components/input/input'
import { useState } from 'react'


const App = () => {

  const [user , setUser ] = useState([])
  const [infRepos, setInfeRepos] =useState([])
  

  return ( 
    <ContApp >
      <Herader />
        <InputButton user={user} setUser={setUser}/>
        <button type='button'>Buscar</button>
        {console.log(user)}

        <p>{`0`}</p>
      <Repos />
      carlos
    </ContApp>
  )
}

export default App
