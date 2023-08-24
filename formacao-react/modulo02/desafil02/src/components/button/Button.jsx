import { ContInput } from "../../style/styled";

const Button = ({funct}) =>{
    return(
        <button type="button" onClick={funct}> Buscar</button>
    )
}

export default Button