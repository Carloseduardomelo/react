import Pergunta from "./Per";

export default function Faq(){
    return(
        <div className={`flex flex-col items-center justify-center m-12 gap-10 text-center w-[504px]`}>

            <Pergunta texte="O que é que quanto mais se tira, mais ele cresce?" resposta="Um buraco"/>
            <Pergunta  texte="O que é que tem quatro patas, mas não consegue andar?" resposta="Uma messa"/>
            <Pergunta texte="O que é que todo mundo tem, mas ninguém pode perder?" resposta="Um sobrenome"/>
            
        </div>
    )
}