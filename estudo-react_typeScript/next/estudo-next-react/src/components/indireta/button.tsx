interface IOnclick{
    onclickdek: () => void
    onclickinc: () => void
}

const Button = (props:IOnclick) =>{
    return(
        <div className={`w-full h-full flex gap-2`}>
            <button type="button" onClick={props.onclickdek} className={`w-1/2 h-full flex items-center justify-center  bg-red-500`}>inc</button>
            <button type="button" onClick={props.onclickinc} className={`w-1/2 h-full flex items-center justify-center  bg-red-500`}>dek</button>
        </div>
    )
} 

export default Button