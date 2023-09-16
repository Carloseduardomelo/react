import { useState } from "react"
import usePegar from "./usePegar"
import axios from "axios"

const useProximaPage = () =>{

    const { nextPage , setNextPage , setDadosApi } = usePegar()
    const [ voltatPage , setvoltaPage ] = useState<string>('')

    const proximaPage = async () =>{

        const dadonext = await axios.get(nextPage)

        const dado = await dadonext['data']

        setNextPage(dado['next'])

        setvoltaPage(dado['previous'])

        const dadoTratados = dado['results']

        await setDadosApi(dadoTratados.map((dado:string) => dado))

        console.log(dado)
    }

    return{
        proximaPage,
        voltatPage,
        setvoltaPage
    }
}

export default useProximaPage