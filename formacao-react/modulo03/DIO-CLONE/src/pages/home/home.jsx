import { Link } from "react-router-dom";
import { ContImgHearder, ContInfHearder, ContInfHer, ContTudo , Hearder, HearderLogo, HeraderButton } from "../../style/styled";
import fotoLogoDio from "../../assets/logo-dio 1.png"
import fotohome from '../../assets/img-home.png'

const Home = () =>{
    return(
        <ContTudo>
            <Hearder>
                <HearderLogo>
                    <img src={fotoLogoDio} alt=" foto da logo da dio"/>
                </HearderLogo>
                <HeraderButton>
                    <button type="button" id="pri" ><Link className="link" id="pri" to={`/`}>Home</Link></button>
                    <button type="button"><Link className="link" to={`/login`}>Enter</Link></button>
                    <button type="button"><Link className="link" to={`/register`}>Cadatro</Link></button>
                </HeraderButton>
            </Hearder>
            <ContInfHer>
                <ContInfHearder>
                    <p id="imp" >Implemente</p>
                    <p>o seu futuro global agora!</p>
                    <p id="min">Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>

                    <div id="but">
                        <button type="button">começe agora</button>
                    </div>
                </ContInfHearder>
                <ContImgHearder>
                    <img src={fotohome} alt="" />
                </ContImgHearder>
            </ContInfHer>
        </ContTudo>
    )
}

export default Home