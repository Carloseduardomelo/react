import api from "@/services/api/api"
import { useState } from "react"

const usePegar = () =>{
    const [ dadosApi ,  setDadosApi ] = useState<string[]>([])
    const [ nextPage , setNextPage ] = useState<string>('')

    const SimularChamadaApi = async () =>{

        const res = await api.get('people/')

        const dado = await res['data']

        const dadoTratados = await dado['results']

        await setDadosApi(dadoTratados.map((dado:string) => dado))

        setNextPage(dado['next'])

        console.log(dadoTratados , 'olamundo')

        //console.log(dadosApi.map((dada:any, i ) => dada['name']))
    }

    return{
        SimularChamadaApi,
        dadosApi,
        nextPage,
        setNextPage,
        setDadosApi
    }
}

export default usePegar