interface BotoesProps{
    inc: () => void
    dec: () => void
}

export default function Botoes(props: BotoesProps){
    return(
        <div className={`flex gap-1 justify-center`}>
            <button className={`botao flex-1`} onClick={props.inc}>Inc</button>
            <button className={`botao flex-1`} onClick={props.dec}>Dec</button>
        </div>
    )
}