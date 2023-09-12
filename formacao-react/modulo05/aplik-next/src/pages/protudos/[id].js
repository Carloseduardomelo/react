import { useRouter } from "next/router"


const Teste02 = () =>{

    const route = useRouter()

    const { id } = route.query
    return(
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default Teste02