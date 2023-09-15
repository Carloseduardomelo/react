import ButtonRouter from "@/components/button/button"
import List from "@/components/condicional/list/list"
import Protutos from "@/constants/protudo"
import { useState } from "react"

const PagListe = () =>{

    const dados = [ 'Botafogo', 'Palmeiras', 'Flamengo','Grêmio', 'Fluminense',	'Bragantino', 'Athletico-PR','Fortaleza','Atlético-MG', 'São Paulo' ]
    

    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col`}>
            <div className={`w-full h-[90%] flex items-center justify-center flex-col gap-4 text-red-800`}>        
                <List text={dados}/>
            </div>
            <div className={`w-full h-[10%] flex gap-11 items-center justify-center`}>
                <ButtonRouter text={`seg/Img`} para={`IMG`}/> 
                <ButtonRouter text={`seg/cont`} para={`cont`}/>
                <ButtonRouter text={`ter/Faq`} para={`Faq`}/>
                <ButtonRouter text={`ter/Protudos`} para={`protutos`} />
                <ButtonRouter text={`quar/Grid`} para={`Grid`} />

                {}
            </div>
        </div>

    )
}

export default PagListe