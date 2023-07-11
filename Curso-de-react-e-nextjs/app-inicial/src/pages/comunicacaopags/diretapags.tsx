import Avo from "@/components/comunicacao/direta/Avo";

export default function pagsdireta(){
    return(
        <div className={`felx gap-5 justify-center items-center h-screen`}>
            <h1 className={`text-center`}>Comunicaçao direta</h1>
            <Avo nome="Carlos" Sorenome="Edardo" />
            <Avo nome="Antonil" Sorenome="Nascimento" />
        </div>
    )
}