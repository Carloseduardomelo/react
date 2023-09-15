import ButtonRouter from "@/components/button/button";
import  Protudo  from '../../components/condicional/list/Protudo'
import Protutos from "@/constants/protudo";


const PagProtuto = () =>{

    return(
        <div className={`w-screen h-screen flex items-center justify-center flex-col `}>
            <div className={`w-[80%] h-[90%] flex items-center justify-center gap-5 `}>
                {Protutos.map((a , i ) => <Protudo  protuto={a}/>)}
            </div>
            <div className={`w-full h-[10%] flex items-center justify-center gap-11`}>
                <ButtonRouter text={`seg/Img`} para={`IMG`}/> 
                <ButtonRouter text={`seg/cont`} para={`cont`}/>
                <ButtonRouter text={`ter/Faq`} para={`Faq`}/>
                <ButtonRouter text={`quar/Grid`} para={`Grid`} />
            </div>
        </div>
    )
}

export default PagProtuto