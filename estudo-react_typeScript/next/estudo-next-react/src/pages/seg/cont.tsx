import ButtonRouter from "@/components/button/button"
import Contador from "@/components/indireta/contador"

const Cont = () =>{
    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col gap-[20px]`}>
            <div className={`w-screen h-[90%] flex items-center justify-center gap-[20px]`}>
                <Contador />
                <Contador />
                <Contador />
                <Contador />
            </div>
            <div className={`flex gap-11 h-[10%]`}>
                <ButtonRouter text={`seg/Img`} para={`IMG`}/>
                <ButtonRouter text={`ter/Faq`} para={`Faq`}/>
                <ButtonRouter text={`ter/Liste`} para={`List`} />
                <ButtonRouter text={`ter/Protudos`} para={`protutos`} />
                <ButtonRouter text={`quar/Grid`} para={`Grid`} />
                <ButtonRouter text={`quar/start`} para={`start`} />
            </div>

        </div>
    )
}

export default Cont