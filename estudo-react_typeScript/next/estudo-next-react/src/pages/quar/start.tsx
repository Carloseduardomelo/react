import ButtonRouter from "@/components/button/button";
import Persongen from "@/components/start/personagen";

const PagPerson = () =>{
    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col bg-zinc-600`}>
            <div className={`w-full h-[90%] flex items-center justify-center flex-col`}>
                <Persongen />
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

export default PagPerson