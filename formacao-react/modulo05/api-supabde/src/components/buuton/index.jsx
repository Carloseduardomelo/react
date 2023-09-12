import { StyleButon } from './styled'
const Button = ({onClick , title}) =>{
    return(
        <StyleButon>   
            <button type="button" onClick={onClick}>{title}</button>
        </StyleButon>
    )
}

export default Button