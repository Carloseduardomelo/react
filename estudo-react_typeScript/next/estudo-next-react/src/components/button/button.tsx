interface IpropsButton{
    text:string
    para:string
}

const ButtonRouter = ( { text , para  }:IpropsButton ) =>{
    return(
        <div className={`w-56 h-12 flex items-center justify-center text-black bg-zinc-400`}>
            <button type="button" className={`w-full h-full bg-yellow-300 `}><a href={`/${text}`}>{para}</a></button>
        </div>
        
    )
}

export default ButtonRouter