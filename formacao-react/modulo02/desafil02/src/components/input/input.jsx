import { ContInput } from "../../style/styled"

// eslint-disable-next-line react/prop-types
const InputButton = ({ setUser , user}) =>{
    return(
        <input type="text" 
        placeholder='Nome do repositorio'
        value={user}
        // eslint-disable-next-line no-undef
        onChange={(event) => setUser(event.target.value)}/>
    )
}

export default InputButton