import { useEffect , useState } from "react";

const UseEffect = () => {

    const [ nome , setNome ] = useState('carlos')

    //useEffect(() =>{ //! com esse useEffct eu consigo adr uma alert cada vez que o nome modar.
        //alert(nome)
    //}, [nome])

    //todo: comentei o useEffct porque toda vez que eu mechia em alguma coisa ele aparecia um alert na tela.

    const modarNome = () =>{
        setNome(prev => prev === 'carlos' ? 'paulo' : 'carlos')
    }
    return(
        <div>
            <h1>UseEffct</h1>
            <p>{nome}</p>
            <button type="button" onClick={modarNome}>Mudar Nome</button>
        </div>
    )
}

export default UseEffect