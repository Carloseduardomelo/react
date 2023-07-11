interface DisplayProps{
    valor:number
}


export default function Display(props: DisplayProps) {
    return(
        <div className={`flex items-center justify-center flex-1 font-black bg-zinc-600 p-5 rounded-[1px]`}>
            {props.valor}
        </div>
    )
}