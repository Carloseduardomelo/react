import Circulo from "@/components/basicos/Circulo";

export default function PagsCirculos(){
    return(
        <div className={`
        flex items-center justify-center m-5
        
        `}>
            <Circulo text="circ #1" />
            <Circulo text="circ #2"  queseperf/>
        </div>
    )
}