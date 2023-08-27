import { useMemo , useState } from "react";

const UseMemo = () => {

    const [ ege , setEge ] = useState(17)

    const trocar = () =>{
        setEge(prev => prev === 17 ? 20 : 17)
    }

    const calculo = useMemo(() =>{ //! com o useMEmo nos podemos memorizar coisa para ganhar desepenho nas nossas paginas.
        console.log('Calculol')
        return 10 * ege //! esse calculo vai ficar memorizado pelo useMemo para ser usado mais tarde
    }, [ege])

    console.log(calculo)

    return(
        <div>
            <h1>UesrMemo</h1>
            <p>{ege}</p>
            <button type="button" onClick={trocar}>TRocar</button>
        </div>
    )
}

export default UseMemo