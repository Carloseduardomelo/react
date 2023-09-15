import Button from "./button"
import Disple from "./disple"
import { useState } from "react"




const Contador = () =>{

    //! esse estado vai ser serponsavel paara genrensiar o numero do contador
    const [ cont , setCont ] = useState<number>(0)


    //! function de incremento que vamos passar com parametro para nosso button
    const inc = () =>{
        setCont(cont - 1)
    }

    //! function de decremento que vamos passar com parametro para nosso button
    const dek = () =>{
        setCont(cont + 1)
    }

    return(
        <div className={`flex flex-col w-[20%] h-[40%] bg-red-950 p-[10px] gap-[5px]`}>
            <div className={`flex items-center justify-center h-[80%] w-full`}>
                <Disple num={cont}/>
            </div>
            <div className={`w-full h-[20%]`}>
                <Button onclickinc={inc} onclickdek={dek}/>
            </div>
        </div>
    )
}

export default Contador