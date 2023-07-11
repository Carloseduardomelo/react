import Filho from "./Filho";

interface PaiProps{
    nome: string
    Sorenome: string
}


export default function Pai(props: PaiProps){
    return(
        <div className="flex  gap-5 flex-col  bg-neutral-700 text-white border ml-2 border-white rounded-xl p-5">
            <div className={`flex gap-2`}>
                <p className=" font-black">Pai:</p>
                <span>{props.nome}</span>
                <span>{props.Sorenome}</span>
            </div>
            <div className={`flex`}>
                <Filho nome="typescript" Sorenome={props.Sorenome} />
            </div>
    </div>
    )
}