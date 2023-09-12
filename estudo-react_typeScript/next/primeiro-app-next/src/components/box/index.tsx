interface IPropsBox{
    title: string
    description: string
    body?: string
}

const Box = ({title, description , body }:IPropsBox) =>{
    return(
        <div className={` w-1/5 h-auto flex items-start justify-center flex-col gap-6 p-6 rounded-3xl bg-purple-500`}>
            <p className={`text-3xl`}>{title}</p>
            <p className={`text-lg`}>{description}</p>
            <p className={`text-lg`}>{body}</p>
        </div>
    )
}

export default Box