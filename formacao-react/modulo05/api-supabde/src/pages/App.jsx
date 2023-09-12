import { useState , useEffect} from 'react'
import { api } from '../services/api'
import Button from '../components/buuton'
import { ContApp } from './style'
import { supabase } from '../supabase/supabase'

function App() {
  const [inf, setInf] = useState([])

  const [ protutes , setProtutes ] = useState([])

    const dados = async () =>{
      const dadosApi = await api.get('/posts')

      const dadosApiJson =  await dadosApi['data']

      await setInf(dadosApiJson)

      console.log(inf[0])
  }

  async function supaBasedados(){
    try{
      const {data , error } = await supabase
            .from("posts")
            .select("*")

            if(error) throw error
            if(data != null){
              setProtutes(data) //! [ protutes1 , protute2 ]
            console.log(supabase)
      }


    }catch(error){
      
    }

    
  }

  useEffect(() =>{
    supaBasedados()
  }, [])

  return (

  <ContApp>
      <Button title={`mostra`} onClick={dados}/>
      {inf?.map((dados03) => <p>{dados03['title']}</p>)}
  </ContApp>

  )
}

export default App
