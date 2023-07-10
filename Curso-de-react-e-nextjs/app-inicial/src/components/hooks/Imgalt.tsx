import Image from "next/image"
import { useState } from "react"

export default function Imgalt(){

    const [pesquisa, altpes] = useState<string>('python')
    const [tamanho, alttm] = useState(350)
    const url ='https://source.unsplash.com/featured/300x300?'

    function urlimg(){1
        return `${url}${pesquisa}`
    }

    function rendz(valor: string, valornub: Number){
        return(
            <button className={`cursor-pointer w-auto p-2 bg-red-500 rounded-sm`} onClick={() => {altpes(valor)
            console.log(urlimg());
            
            }}>
                {valor}
            </button>
        )
    }

    return(
        <div className={`flex items-center justify-center flex-col m-auto border-2`}>
            <div className={`flex justify-center gap-6 mt-5`}>
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <Image src={`${urlimg()}${tamanho}x${tamanho} ${pesquisa}`} height={200} width={200} alt="corno" className={`mt-5`}/>
            <div className={`flex items-center justify-center m-5 gap-6 text-xs`}>

            {rendz('Mar', tamanho)}
            {rendz('Python', tamanho)}
            {rendz('Javascript', tamanho)}

            </div>
            <div>
                <input 
                    type="number" 
                    value={tamanho}
                    className={`text-zinc-300 bg-zinc-900 my-5 text-center`}
                    onChange={e => {
                        alttm(+e.target.value)
                    }}
                    />
            </div>
    </div>
    )
}