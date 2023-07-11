import Pai from "./Pai";

interface AvoProps{
    nome: string
    Sorenome: string
}

export default function Avo(props: AvoProps){
    return(
        <div className={`flex flex-col items-center justify-center m-5 gap-5 bg-red-500 p-5 rounded-md w-auto`}>
            <div className={`flex gap-2`}>
                <p className=" font-black">Avô:</p>
                <span>{props.nome}</span>
                <span>{props.Sorenome}</span>
            </div>
            <div className={`flex`}>
                <Pai  nome="bugão" Sorenome={props.Sorenome}/>
                <Pai nome="python" Sorenome={props.Sorenome} />
                <Pai nome="javascript" Sorenome={props.Sorenome}/>
            </div>
        </div>
    )
}