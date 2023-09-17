import { ReactElement, useEffect, useState } from "react";
import api from "@/services/api/api";
import axios, { Axios, AxiosError } from "axios";

const Persongen = () =>{

    const [ nextPage , setNextPage ] = useState<string>('')
    const [ voltatPage , setvoltaPage ] = useState<string>('')
    const [ dadosApi ,  setDadosApi ] = useState<string[]>(['carregando'])

    const SimularChamadaApi = async () =>{

        const res = await api.get('people/')

        const dado = await res['data']

        const dadoTratados = await dado['results']

        await setDadosApi(dadoTratados.map((dado:string) => dado))

        setNextPage(dado['next'])

        console.log(dadoTratados , 'olamundo')

        //console.log(dadosApi.map((dada:any, i ) => dada['name']))
    }

   const proximaPage = async () =>{

        const dadonext = await axios.get(nextPage)

        const dado = await dadonext['data']

        setNextPage(dado['next'])

        setvoltaPage(dado['previous'])

        const dadoTratados = await dado['results']

        await setDadosApi(dadoTratados.map((dado:string) => dado))

        console.log(dado)

   }
    
    const voltarPage = async () =>{
        try{
            const dadoVoltar = await axios.get(voltatPage)

            const dado = await dadoVoltar['data']

            const dadoTratados = await dado['results']

        await setDadosApi(dadoTratados.map((dado:string) => dado))

            setNextPage(dado['next'])

            setvoltaPage(dado['previous'])

            console.log(dado) 

        }catch(error){
            alert('n tem como voltar mais uma page')
        }
    }
 
    useEffect(() =>{
        SimularChamadaApi()
    },[])

    return(
        <div className={`w-screen h-screen flex items-center justify-center gap-11 flex-col`}>
            <div className={`w-full h-[90%] flex items-center justify-center`}>
                <ol>
                    { dadosApi.map((dado:any) =><li>{dado['name']}</li>)}
                </ol>
                
            </div>
            <div className={`w-full h-[10%] flex items-center justify-center gap-11`}>
                <button onClick={proximaPage} className={`w-[200px] h-[50px] bg-purple-600 `}>proxima pag</button>
                <button onClick={voltarPage} className={`w-[200px] h-[50px] bg-purple-600 `}>voltar pag</button>
            </div>
        </div>
    )
}

export default Persongen