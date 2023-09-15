import { IconBallFootball, IconFlagBolt } from "@tabler/icons-react"

interface IPropsList{
    text: string[]
}

const List = (props:IPropsList) =>{


    return(
        <div className={`w-[30%] h-auto text-black flex items-center justify-center flex-col `}>
            <p className={`flex items-center justify-center gap-2 text-[30px] text-white mb-[20px]`}>TAbela do Brasileiram <IconBallFootball  className={`text-green-500 flex items-center justify-center`}/></p>
            <ol className={`flex gap-5 flex-col text-[20px]`}>
                {props.text.map((dados , i) => i % 2 === 0 ? <li className={`text-green-500 flex items-center justify-center `}>{i + 1}:  {dados}</li> : <li className={`text-red-500 flex items-center justify-center`}>{i+1}: {dados}</li>)}
            </ol>
        </div>
    )
}

export default List