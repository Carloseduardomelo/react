import { match } from "assert";

export default function Caixa(props: any){
    return(
        <div className={`
        bg-red-700 p-2 m-10 rounded-lg w-40 text-center text-green-500
        `}>
            {props.children}
        </div>
    )
}