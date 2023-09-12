import Contador from "@/components/indireta/contador"

const Cont = () =>{
    return(
        <div className={`w-screen h-screen flex items-center justify-center gap-[20px]`}> 
            <Contador />
            <Contador />
            <Contador />
            <Contador />
        </div>
    )
}

export default Cont