import {ContainerApp , ContApp , ContAppImg ,ContAppConteito} from "./style"
import Hearder from "../../components/Hearder/hearder"
import foto from '../../assets/background.png'
import Perfil from "../../components/perfil/perfil"
import {Repositorios } from "../../components/repositorios/Repositorios"

const App = () => {
  return (
      <ContainerApp>
        <Hearder/>
        <ContApp>
          <ContAppImg>
            <img src={foto} alt="" />
          </ContAppImg>
          <ContAppConteito>
            
            <Perfil />
            <hr/>
            <h3>Repositorios</h3>
            <Repositorios />
            <Repositorios />
          </ContAppConteito>
        </ContApp>
      </ContainerApp>
  )
}
export default App
