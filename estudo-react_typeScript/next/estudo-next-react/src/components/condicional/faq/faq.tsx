import { IconArrowBack, IconArrowBarLeft, IconArrowDown } from "@tabler/icons-react"
import { ReactNode, useState } from "react"

interface IPropsPerguntas{
    pergunta: string
    resposta: string
}

const Faq = (props: IPropsPerguntas) =>{

    const [ aberta , setAberta ] = useState<boolean>(false)

    const Trocar = () =>{
        aberta ? setAberta(false) : setAberta(true)
    }

    return(
        <div className={`w-[100%] h-[auto] flex items-center justify-center flex-col rounded-3xl overflow-hidden`}>
            <div 
            onClick={Trocar}
            className={`w-full h-[100px] bg-red-700 flex items-center justify-center cursor-pointer`}
            >
                <span className={`flex justify-between w-[80%]`}>{props.pergunta} {aberta ? <IconArrowBack />: <IconArrowDown />}</span>
            </div>
            {aberta ? (

            <div className={`w-full h-[100px] bg-yellow-600 flex items-center justify-center`}>
                {props.resposta}
            </div>
            ) :''}

        </div>
    )
}

export default Faq