import ButtonRouter from "@/components/button/button";
import Grid from "@/components/layout/gris";

const PagGrid = () =>{
    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col bg-zinc-600`}>
            <div className={`w-full h-[90%] flex items-center justify-center`}>
                <Grid cols="2">
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                    <div className={`w-36 h-36 bg-purple-500`}></div>
                </Grid>
            </div>
            <div className={`w-full h-[10%] flex items-center justify-center gap-11`}>
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