interface CirculoProps{
    text: string
    queseperf?: boolean
}

export default function Circulo(props: CirculoProps){
    console.log(props)
    return(
        <div className={`
            h-64 w-64 bg-red-900  flex
            items-center justify-center m-auto
            ${props.queseperf ? 'rounded-xl': 'rounded-full'}
        `}>
            {props.text} 
        </div>
    )
}