import { useState } from "react"

const useProcesso = () =>{

    const [ processo , setProcesso ] = useState<Boolean>(false)

    const iniciar=  () =>{
        setProcesso(true)
    }

    const finalizar = () =>{
        setProcesso(false)
    }

    return{
        processo,
        iniciar,
        finalizar
    }
}

export default useProcesso