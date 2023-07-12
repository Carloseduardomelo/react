import {useState} from "react"
import If from "./If";
import { IconChevronDown , IconChevronUp} from "@tabler/icons-react";

interface PerguntaProps{
    texte: string;
    resposta: string;
}

export default function Pergunta(props: PerguntaProps){

    const [Aberta, setAberta] = useState<Boolean>(false)

    return(
        <div className={`border border-zinc-100 p-[0px] rounded-[5px] overflow-hidden w-[100%]`}>
            <div className={`bg-zinc-700 p-5 cursor-pointer select-none flex justify-between`} onClick={() => setAberta(!Aberta)}>
                {props.texte}
                {Aberta? < IconChevronUp/> : <IconChevronDown />}
            </div>

            <If teste={Aberta}>
                <div className={`p-5`}>
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}