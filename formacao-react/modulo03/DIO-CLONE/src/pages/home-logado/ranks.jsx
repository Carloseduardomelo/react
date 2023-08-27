import { RankStyle , RanksContsEnd } from '../../style/styled'
import fotoperfil from '../../assets/fotoPerfilLogado.jpg'

const Ranks = () =>{
    return(
        <RanksContsEnd>
            <RankStyle>
                <div id='contRank'>
                    <img src={fotoperfil} alt="fasf" />
                    <div id='nome'>
                        <p>Carlos eduardo</p>
                    <div id='div'></div>
                </div>
            </div>
            </RankStyle>
        </RanksContsEnd>
    
    )
}

export default Ranks