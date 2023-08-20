import { ContPerfil , ContFotoPerfil , ContPerfilDescricao } from './style'

const Perfil = (url, nome, aroba, describe) =>{
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