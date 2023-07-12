import {useState} from "react"
import Botoes from "./Botaos";
import Display from "./Display";

export default function Contador(){
    const [num, setNum] = useState<Number>(0)

    function incre(){
        setNum(1 + num)
    }

    function descre(){
        setNum(num - 1)
    }
    return(
        <div className={`flex flex-col border border-zinc-600 w-44 h-44 text-center p-1 `}>
            <Display valor = {num} />
            <Botoes inc={incre} dec={descre} />
        </div>
    )
}