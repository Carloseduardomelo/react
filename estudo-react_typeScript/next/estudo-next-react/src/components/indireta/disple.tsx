interface IpropsNumber{
    num: number
}

const Disple = (props: IpropsNumber) =>{
    //! Esse compomente e para mostrar o numero que ta no useState no compomente Contador
    return(
        <div className={`w-full h-[100%] bg-yellow-400 flex items-center justify-center`}>
            <h3 className={`text-4xl text-black`}>{props.num}</h3>
        </div>
    )
}

export default Disple