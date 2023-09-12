import { useState , useEffect } from 'react'

import Box from '@/components/box'
import Hearder from '@/components/hearder'
import { api } from '@/services/api'
import { supabase } from '@/supabase'


export default function Home() {

  const [ Inf , SetInf ] = useState([])

  const dadosApi = async () =>{
      const dadosB = await api.get('/posts')
      const dadosT = await dadosB['data']
      await SetInf(dadosT)
  }

  const supaBasedados = async () =>{
    try{
      let { data , error } = await supabase
            .from('posts')
            .select('id')
            if(error) throw error

            console.log(data)

    }catch(error){
      console.log(error)
    }
  }

  useEffect(() =>{
      dadosApi()
  }, [])
  return (
  <div className={`w-screen h-screen bg-zinc-600 flex items-center justify-start flex-col gap-6 `}>
    <Hearder />
    {Inf.map((dado) => 
    <Box title={dado['title']} description={dado['descripton']} />
    )}
    <button type="button" onClick={supaBasedados}> buscar </button>
  </div>
  )
}
