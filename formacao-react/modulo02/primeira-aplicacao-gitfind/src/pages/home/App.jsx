/* eslint-disable react/jsx-key */
import {ContainerApp , ContApp , ContAppImg ,ContAppConteito , StylesInput} from "./style"
import Hearder from "../../components/Hearder/hearder"
import foto from '../../assets/background.png'
import foto02 from '../../assets/31221705_7746242.jpg'
import Repositorios  from "../../components/repositorios/Repositorios"
import Perfil from "../../components/perfil/perfil"
import { useState } from "react"

const App = () => {

  const [user , setUser] = useState('');
  const [correntUser, setCorrentUser] = useState(['carloseduardomelo' , foto02 , 'Sou apaixonado por tecnologia' , 'carlos eduardo']);
  const [repos , setRepus] = useState([]);

  const buscarDado = async () => {

    const dadosDoUser = await fetch(`https://api.github.com/users/${user}`)

    if(dadosDoUser.status === 200){
      const newUser = await  dadosDoUser.json();
    
      setCorrentUser([newUser.login , newUser.avatar_url, newUser.bio , newUser.name]);

      const dadosDoUserRepos = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await dadosDoUserRepos.json();

      setRepus(newRepos.map((dados) => dados))

      console.log(dadosDoUser.status)
    }else{
      alert('o usuario não existe, porfavor coloque um usuario que exista')
      console.error('erro 404')
    }
  }

  return (
      <ContainerApp>
        <Hearder/>
        <ContApp>
          <ContAppImg>
            <img src={foto} alt="" />
          </ContAppImg>
          <ContAppConteito>
          <StylesInput>
            <input type="text" value={user} onChange={event => setUser(event.target.value)}placeholder="@username"/>
            <button type="button" onClick={() => buscarDado()}>buscar</button>
          </StylesInput>
            <Perfil url={correntUser[1]} nome={`${correntUser[3] === null ? correntUser[0] : correntUser[3]}`} aroba={`@${correntUser[0] === null ? correntUser[3] : correntUser[0]}`} describe={`${correntUser[2] === null? 'usuario não tem bio' : correntUser[2]}`}/>
            <hr/>

            <h3>Repositorios</h3>

            {repos.map((dados01) => <Repositorios link={dados01['html_url']} title={dados01['name'].length === 0 ? 'O usuario não tem repositorio' : dados01['name']} describe={dados01['description'] === null ? 'o usuario não tem descrição do repositorio' : dados01['description']} />)}
            
          </ContAppConteito>
        </ContApp>
      </ContainerApp>
  )
}
export default App
