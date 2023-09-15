import ButtonRouter from "@/components/button/button";
import Grid from "@/components/layout/gris";
import { get } from "http";
import { useState } from "react";

const PagGrid = () =>{
    //! useSatate para as cols do grid ali em baixo
    //const [ cols ,  setCols ] = useState<string>('2')

    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col bg-zinc-600`}>
            <div className={`w-full h-[90%] flex items-center justify-center flex-col text-black`}>
                    {/*<input type="number" name="" id="" onChange={(a) => setCols(a.target.value)}/>*/}
                <Grid cols="2">
                     {/*conts do grid para test*/}
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                </Grid>
            </div>
            <div className={`w-full h-[10%] flex items-center justify-center gap-11`}>
                {/* Button para facilitar a locomoção entres as pages*/}
                <ButtonRouter text={`seg/Img`} para={`IMG`}/>
                <ButtonRouter text={`seg/cont`} para={`cont`}/>
                <ButtonRouter text={`ter/Faq`} para={`Faq`}/>
                <ButtonRouter text={`ter/Liste`} para={`List`} />
                <ButtonRouter text={`ter/Protudos`} para={`protutos`} />
            </div>
        </div>
    )
}

export default PagGrid