/* eslint-disable react/prop-types */
import { ContPerfil , ContFotoPerfil , ContPerfilDescricao } from './style'
import foto from '../../assets/31221705_7746242.jpg'

const Perfil = ({url=`${foto}`, nome = "carlos", aroba, describe}) => {
    return(
        <ContPerfil>
            <ContFotoPerfil>
                <img src={url} alt="nada" />
            </ContFotoPerfil>

            <ContPerfilDescricao>
                <section>
                    <h3>{nome}</h3>
                    <p>{aroba}</p>
                </section>
                <section>
                    <p>{describe}</p>
                </section>
            </ContPerfilDescricao>

        </ContPerfil>
    )
}

export default Perfil