interface IContainerProps{
    id?: number
    title: string
    descrition: string
    created_at: string
    link?:string |any
    onClick?: void | any
}

const Container = (props: IContainerProps) =>{
    return(
        <div className={`md:w-[40%]  w-[70%] h-[25%] flex items-center justify-center flex-col bg-purple-700 rounded-[20px] gap-[10px] border-indigo-900`}>
            <div className={`flex flex-col gap-5 w-[80%]`}>
                <p className={`text-[25px]`}>{props.title}</p>
                <p className={`text-[17px]`}>{props.descrition}</p>
                <p className="">postado em :  {props.created_at.slice(-32, 10)}</p>
            </div>
            <a href={props.link} className={`w-[80%] h-[20%] flex items-center justify-center border-indigo-900`}> <button type="button" onClick={props.onClick} className={`w-[90%] h-[100%] bg-purple-500 text-black rounded-[20px]`}>ver mais</button></a>
           
            
        </div>
    )
}

export default Container