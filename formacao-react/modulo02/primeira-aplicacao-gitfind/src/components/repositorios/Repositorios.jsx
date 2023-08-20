import { ContRepositorios , ContInfReposi} from './style'

// eslint-disable-next-line react/prop-types
const Repositorios = ({ title , describe }) => {
    return (
        <ContRepositorios>
            <ContInfReposi>
                <section>
                    <h3>{title}</h3>
                </section>
                <section>
                    <p>{describe}</p>
                </section>
            </ContInfReposi>
            <hr/>
        </ContRepositorios>
    )
}


export default Repositorios
