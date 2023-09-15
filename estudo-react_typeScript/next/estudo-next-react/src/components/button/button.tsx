interface IpropsButton{
    text:string
    para:string
    //? tipagem dos parametros que o Button vai receber< quem saço eles: para onde ele vai levar e o nome do compomente que ele vai levar
}

const ButtonRouter = ( { text , para  }:IpropsButton ) =>{

    //! comopomentes para facilitar a locomoção entra as pages
    return(
        <div className={`w-56 h-12 flex items-center justify-center text-black bg-zinc-400`}>
            <button type="button" className={`w-full h-full bg-yellow-300 `}><a href={`/${text}`}>{para}</a></button>
        </div>
        
    )
}

export default ButtonRouter