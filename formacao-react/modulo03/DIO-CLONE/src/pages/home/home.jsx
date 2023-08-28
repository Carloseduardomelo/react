import { Link } from "react-router-dom";
import {
  ContImgHearder,
  ContInfHearder,
  ContInfHer,
  ContTudo,
  Hearder,
  HearderLogo,
  HeraderButton,
} from "../../style/styled";
import fotoLogoDio from "../../assets/logo-dio 1.png";
import fotohome from "../../assets/img-home.png";

const Home = () => {
return (
    <ContTudo>
        <Hearder>
            <HearderLogo>
            <img src={fotoLogoDio} alt=" foto da logo da dio" />
            </HearderLogo>
            <HeraderButton>
                <Link className="link" id="pri" to={`/`}>
                Home
                </Link>
                <Link className="link" to={`/login`}>
                Enter
                </Link>
                <Link className="link" to={`/registro`}>
                Cadatros
                </Link>
            </HeraderButton>
        </Hearder>
        <ContInfHer>
            <ContInfHearder>
                <p id="imp">Implemente</p>
                <p>o seu futuro global agora!</p>
                <p id="min">
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do
                    mundo e encare seu novo desafio profissional, evoluindo em
                    comunidade com os melhores experts.
                </p>

                <div id="but">
                    <button type="button"><Link id="bot" to={`/login`}>Começe agora</Link></button>
                </div>
            </ContInfHearder>
            <ContImgHearder>
                <img src={fotohome} alt="" />
            </ContImgHearder>
        </ContInfHer>
    </ContTudo>
);
};

export default Home;
