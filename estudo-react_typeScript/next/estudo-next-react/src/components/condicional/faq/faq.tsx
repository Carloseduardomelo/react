import { IconArrowBack, IconArrowBarLeft, IconArrowDown } from "@tabler/icons-react"
import { ReactNode, useState } from "react"

interface IPropsPerguntas{
    pergunta: string
    resposta: string
    //? tipagem para os parametros que vamos receper no compomente FAp que são: pergunta e a resposta que vai ver exipida dada uma condicçao especifica
}

const Faq = (props: IPropsPerguntas) =>{

    const [ aberta , setAberta ] = useState<boolean>(false) //! esse useState e para controlar o estado de boolean, esse estado vai ser responsavel pelo fechamento da pergunta.

    const Trocar = () =>{
        //todo: essa function serve para trocat o estado de falso para true e de truue para false, essa vai ser chamada por um onClick
        aberta ? setAberta(false) : setAberta(true)
    }

    return(
        <div className={`w-[100%] h-[auto] flex items-center justify-center flex-col rounded-3xl overflow-hidden`}>
            <div 
            onClick={Trocar}
            className={`w-full h-[100px] bg-red-700 flex items-center justify-center cursor-pointer`}
            // essa div ele e a minha pergunta, ele que vai chamar a function trocar, ela tbm vai ser responsavel pelo fechamento e a a bertura da pergunta
            >
                <span className={`flex justify-between w-[80%]`}>{props.pergunta} {aberta ? <IconArrowBack />: <IconArrowDown />}</span>
                {/*esse span vai ser responsavel pelo icone ,  caso o estado for true ele vai mostra um icon diferebte e caso fr false ele vai mostrar uma icon diferente*/}
            </div>
            {aberta ? (
            //! essa parte vai responsavel por mostra a respostas, comforme o estado for true ou false,  casso for true ele vai mostra a respostar mais si não for ele na vai maostrat
            <div className={`w-full h-[100px] bg-yellow-600 flex items-center justify-center`}>
                {props.resposta}
            </div>
            ) :''}

        </div>
    )
}

export default Faq