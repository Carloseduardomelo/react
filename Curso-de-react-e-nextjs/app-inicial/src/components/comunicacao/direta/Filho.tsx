import Avo from "./Avo";
import Pai from "./Pai";

interface FilhoProps{
    nome: string
    Sorenome: string
}

export default function Filho(props: FilhoProps){
    return(
        <div className={`text-red-600 bg-green-400`}>
            <div className={`flex gap-2`}>
                <p className=" font-black">Filho:</p>
                <span>{props.nome}</span>
                <span>{props.Sorenome}</span>
            </div>
        </div>
    )
}