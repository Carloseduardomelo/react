import { ContBox } from './styled'

const Box = ({ titlle , description , onclick}) =>{
    return(
        <ContBox>
            <h3>{titlle}</h3>
            <h4>{description}</h4>
            <button type='button' onClick={onclick}>saiba mais</button>
        </ContBox>
    )
}

export default Box