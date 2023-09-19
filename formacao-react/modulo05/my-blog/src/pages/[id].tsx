import useApi from "@/Hooks/useApi";
import { useRouter } from "next/router";
import { useEffect } from "react";


const teste = () =>{
    const router = useRouter()
    const { id } = router.query
    const { inf } = useApi()

    const dadosnew = inf.filter(a => a['id'] === id)

    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col`}>
            <h1 className={`text-[30px]`}>
                descrição do post
            </h1>
            <div className={`md:w-[40%] w-[80%] h-auto flex items-center justify-center bg-purple-700 rounded-[20px] text-[20px] p-[20px]`}>


                {dadosnew.map((a) => a['body'] === '' ? <p>carrengo</p>: a['body'])}
            </div>
            <div className={`w-[80%] h-[10%] flex items-center justify-center`}>
                <a href="/" className={`w-[50%] h-[60%] bg-purple-800 flex items-center justify-center rounded-[20px]`}><button type="button">Voltar</button></a>
            </div>
            
        </div>
    )
}

export default teste