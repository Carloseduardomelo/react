import Caixa from "@/components/basicos/Caixa";

export default function paginacaixa(){
    return(
        <div className={`flex`}>
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>
                <ul>
                    <li>#1</li>
                    <li>#2</li>
                    <li>#3</li>
                </ul>
            </Caixa>
        </div>
    )
}