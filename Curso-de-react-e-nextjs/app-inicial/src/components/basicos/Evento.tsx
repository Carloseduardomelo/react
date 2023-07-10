export default function Evento(){

    let cont = 0
    function inc(){
        console.log(cont++)
    }
    return(
        <button className={`
        h-64 w-64 bg-red-900 flex items-center justify-center text-cyan-500
        `} onClick={inc}>
            carlos
        </button>
    )
}