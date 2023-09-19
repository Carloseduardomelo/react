import { api } from "@/services/api/api"
import { useCallback, useEffect, useState } from "react"

const useApi = () =>{

    const [ inf, setInf ] = useState([])
    const [ id , setId ] = useState(0)
  
    const dadosApi = async () => {
      const dados = await api.get(`/posts`)
  
      const dadosApiJson = await dados['data']
  
      const dadosT = await dadosApiJson.map((tra: string[]) => tra)
  
      await setInf(dadosT)
  
    }

    useEffect(() =>{
        dadosApi()
    },[])

    return{
        dadosApi,
        setId,
        inf,
        id
    }

}

export default useApi