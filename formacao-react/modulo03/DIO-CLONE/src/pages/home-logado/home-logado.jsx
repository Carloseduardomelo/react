import { HomeLogadoStyle ,  InfLogado , HearderLogadoStyle , InputLOgado , FotoLogado , InfTop , ContPostRanks , Post , Ranks02} from "../../style/styled"
import fotologoDio02 from '../../assets/logo-dio 1.png'
import lupa from '../../assets/icons8-lupa.svg'
import fotoperfil from '../../assets/fotoPerfilLogado.jpg'
import InfPost from "./infPost"
import Ranks from "./ranks"


const HomeLogado = () => {
    return(
        <HomeLogadoStyle>
            <HearderLogadoStyle>
                <InputLOgado >
                    <img src={fotologoDio02} alt="" />
                    <p id="input"><img src={lupa} alt="" /><input type="text"  placeholder={`buscar`}/></p>
                    <p>Live code</p>
                    <p>Global</p>
                </InputLOgado>
                <FotoLogado>
                    <img src={fotoperfil} alt="sasf" />
                </FotoLogado>
            </HearderLogadoStyle>
            <InfTop>
                <p>Fedd</p>
                <p>Rank</p>
            </InfTop>
            <ContPostRanks>
                <Post>
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                    <InfPost />
                </Post>
                <Ranks02>
                    <Ranks />
                    <Ranks />
                    <Ranks />
                    <Ranks />
                    <Ranks />
                    <Ranks />
                    <Ranks />
                </Ranks02>
            </ContPostRanks>
            
        </HomeLogadoStyle>
    )
}
export default HomeLogado