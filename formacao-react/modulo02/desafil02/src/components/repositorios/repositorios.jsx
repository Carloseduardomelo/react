import { ContRepos , ContBUtton} from "../../style/styled"

// eslint-disable-next-line react/prop-types
const Repos = ({nome_repo , sub_nome , des_repo , link , functe}) =>{
    return(
        <ContRepos>
            <h3>{nome_repo}</h3>
            <h3>{sub_nome}</h3>
            <p>Nome do dono: {des_repo}</p>
                <ContBUtton>
                    <button type="button"><a href={link} target="_blank" rel="noreferrer">Acessar repo</a></button>
                    <button type="button" onClick={functe}>Remover</button>
                </ContBUtton>

                <hr/>
        </ContRepos>
    )
}

export default  Repos