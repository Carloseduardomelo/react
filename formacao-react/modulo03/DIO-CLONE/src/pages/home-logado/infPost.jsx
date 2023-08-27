import { InfPostStyle , InfPostImg , InfPostInf} from '../../style/styled'
import fotoperfil from '../../assets/fotoPerfilLogado.jpg'

const InfPost = () =>{
    return(
        <InfPostStyle>
            <InfPostImg>
                <img src={fotoperfil} alt="" />
            </InfPostImg>
            <InfPostInf>
                <div id={`divimg`}>
                    <img src={fotoperfil} alt="" />
                    <div>
                        <h3>carlos eduado</h3>
                        <p>ha 9 minutos</p>
                    </div>
                </div>
                <div>
                    <p id='nome'>Projeto do curso de javascript</p>
                    <p>esse projeto foi muito legal para fritar os nelroius</p>
                </div>
                <p>#html #python</p>
            </InfPostInf>
        </InfPostStyle>
    )
}

export default InfPost