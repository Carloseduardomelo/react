import { Link } from "react-router-dom";
import  fotologoDio from '../../assets/logo-dio 1.png'
// import { calentario }from '../../assets/cadeado-trancado.png'
import email from '../../assets/email.svg'
import lock from '../../assets/lock.png'
// import { vect }from '../../assets/Vector.svg'
import {
  ContTudo,
  Hearder,
  HeraderButton,
  HearderLogo,
  ContINput,
  ContInfLogin,
  LoginRegistro,
  ButEntar,
  EsquiCriar
} from "../../style/styled";

const Login = () => {
    return (
    <ContTudo>
        <Hearder>
            <HearderLogo>
                <img src={fotologoDio} alt=" foto da logo da dio" />
            </HearderLogo>
            <HeraderButton>
            <Link className="link" id="pri" to={`/`}>
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
                <p>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</p>
            </ContInfLogin>
            <ContINput>
                <h2>Faça seu cadastro</h2>
                <h3>Faça seu login e make the change._</h3>
                <p id="pril"><img src={email} alt="" /><input type="email" placeholder="E-mail" /></p>
                <hr/>
                <p><img src={lock} alt="" /><input type="password" placeholder="Password" /></p>
                <hr/>
            <ButEntar>
                <div id="but">
                    <button type="button"><Link id="bot" to={`/logado`}>Entar</Link></button>
                </div>
            </ButEntar>
            <EsquiCriar>
                <div id="esqueCriar">
                    <p id="es">Esqueci minha senha</p>
                    <p><Link id="link" to={`/registro`}>Criar conta</Link></p>
                </div>
            </EsquiCriar>

            </ContINput>
        </LoginRegistro>
    </ContTudo>
);
};

export default Login;