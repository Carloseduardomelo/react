import { useState , useCallback } from "react";

const UseCAllback = () =>{

    const [name , setName ] = useState('carlos')
    const [idade , setIade] = useState(17)

    const trocar = useCallback(() =>{
        setName(prev => prev === 'carlos' ? 'paulo' : 'carlos')
    } , [name])

    const trocarIade = useCallback(() =>{
        setIade(prev => prev === 17 ? 18 : 17)
    } , [idade])

    
    return(
        <div>
            <h1>USeCallback</h1>
            <p>{name}</p>
            <p>{idade}</p>

            <button type="button" onClick={trocar}>tracar nome</button>
            <button type="button" onClick={trocarIade}>tracar idade</button>
        </div>
    )
}

export default UseCAllback