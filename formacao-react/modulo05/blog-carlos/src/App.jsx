import { useState  ,  useEffect} from 'react'

import { ConatHeart , ContApp , ContBox } from './styled'
import Box from './components/box'

import { api } from './services/api'
import Hearder from './components/hearder'

function App() {

  const [ Inf, setInf ] = useState([])
  const [ id , setId ] = useState(0)
  const [ one , setOne] = useState(['carlos', 'ana'])

  const dadosApi = async () =>{
    const dados = await api.get(`/posts`)

    const dadosApiJson = await dados['data']

    const dadosT = dadosApiJson.map((tra) => tra)

    setInf(dadosT)
  }


  function nada(id02){
    //setInf([])
    setId(id02)
    console.log(id)
  }

/*    const ids = Inf?.map((dado) => [dado['id']])
    
    for (let i = 0; i < ids.length; i++) {
      if(ids[i][0].indexOf(id) === 1){
        return setOne(1)
      }
    }
    console.log(one)

  } */

  useEffect(() =>{
    dadosApi()
  },[])

  

  return (
    <ContApp>
      <ConatHeart>
          <Hearder title={`carlos`}/>
      </ConatHeart>
      <ContBox>
        {Inf?.map((dado) => <Box titlle={dado['title']} description={dado['descripton']} onclick={() => nada(dado['id'])}/>)}
      </ContBox>
      <button type="button" onClick={() => teste(test, 'caros')}>efsaedfw</button>
    </ContApp>
  )
}

export default App
