import { ContRepositorios , ContInfReposi} from './style'

// eslint-disable-next-line react/prop-types
const Repositorios = ({ link, title, describe}) => {
    return (
        <ContRepositorios>
            <ContInfReposi>
                <section>
                    <h3><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
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
