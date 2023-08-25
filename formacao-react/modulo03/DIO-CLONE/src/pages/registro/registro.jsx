import { Link } from "react-router-dom";
import  fotologoDio from '../../assets/logo-dio 1.png'
// import { calentario }from '../../assets/cadeado-trancado.png'
import email from '../../assets/email.svg'
import lock from '../../assets/lock.png'
import vect from '../../assets/Vector.svg'
import {
  ContTudo,
  Hearder,
  HeraderButton,
  HearderLogo,
  ContINput,
  ContInfLogin,
  LoginRegistro,
  ButEntar,
  Att,
  FazerLogin
} from "../../style/styled";

const Registro = () =>{
    return(
        <ContTudo>
        <Hearder>
            <HearderLogo>
                <img src={fotologoDio} alt=" foto da logo da dio" />
            </HearderLogo>
            <HeraderButton>
            <Link className="link" id="pri"to={`/`}>
                Home
            </Link>
            <Link className="link" to={`/login`}>
                Enter
            </Link>
            <Link className="link" to={`/registro`}>
                Cadatro
            </Link>
        </HeraderButton>
        </Hearder>
        <LoginRegistro>
            <ContInfLogin>
                <p>A plataforma para você <br/> aprender com experts, <br/> dominar as principais <br/> tecnologias e entrar <br/> mais rápido nas <br/> empresas mais <br/> desejadas.</p>
            </ContInfLogin>
            <ContINput>
                <h2>Faça seu cadastro</h2>
                <h3>Faça seu login e make the change._</h3>
                <p id="pril"><img src={vect} alt="" /><input type="email" placeholder="E-mail" /></p>
                <hr/>
                <p id="pril"><img src={email} alt="" /><input type="email" placeholder="E-mail" /></p>
                <hr/>
                <p><img src={lock} alt="" /><input type="email" placeholder="Password" /></p>
                <hr/>
            <ButEntar>
                <div id="but">
                    <button type="button">Criar minha conta</button>
                </div>
            </ButEntar>
            <Att>
                <div id="att">
                    <p>o clicar em criar minha conta gratis, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                </div>
            </Att>
            <FazerLogin>
                <p>ja tenho conta. <Link id="link" to={`/login`}>Fazer login</Link></p>
            </FazerLogin>
            </ContINput>
        </LoginRegistro>
    </ContTudo>
    )
}

export default Registro