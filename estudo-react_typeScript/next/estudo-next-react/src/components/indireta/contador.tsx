import Button from "./button"
import Disple from "./disple"
import { useState } from "react"




const Contador = () =>{

    const [ cont , setCont ] = useState<number>(0)

    const inc = () =>{
        setCont(cont - 1)
    }

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