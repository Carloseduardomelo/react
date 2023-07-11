import Avo from "@/components/comunicacao/direta/Avo";
import Contador from "@/components/comunicacao/indereta/Contador";

export default function pagsindireta(){
    return(
        <div className={`felx gap-5 justify-center items-center h-screen`}>
            <h1 className={`text-center`}>Comunicaçao indireta</h1>
            <div className={`flex justify-center items-center gap-5 mt-10`}>
                <Contador />
                <Contador />
                <Contador />
            </div>
        </div>
    )
}