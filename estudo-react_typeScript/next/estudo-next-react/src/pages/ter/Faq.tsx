import ButtonRouter from "@/components/button/button"
import Faq from "@/components/condicional/faq/faq"

const PageFaq = () => {
    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col`}>
            <div className={`w-[40%] h-[90%] flex items-center justify-center gap-11 flex-col mx:w-[90%]`}>
                <Faq pergunta="quem criol o python" resposta="Giudom vam runsem"/>
                <Faq pergunta="quem criol o javascipt" resposta="eu"/>
            </div>
            <div className={`flex gap-11 w-full items-center justify-center`}>
                <ButtonRouter text={`seg/Img`} para={`IMG`}/> 
                <ButtonRouter text={`seg/cont`} para={`cont`}/> 
                <ButtonRouter text={`ter/Liste`} para={`List`} />
                <ButtonRouter text={`ter/Protudos`} para={`protutos`} />
                <ButtonRouter text={`quar/Grid`} para={`Grid`} />
            </div>
        </div>
    )
}

export default PageFaq