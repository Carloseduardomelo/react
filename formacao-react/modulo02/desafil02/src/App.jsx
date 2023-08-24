import { ContApp, ContInput } from './style/styled'
import Herader from './components/hearder/hearder'
import Repos from './components/repositorios/repositorios'
import InputButton from './components/input/input'
import Button from './components/button/Button'
import { useState } from 'react'


const App = () => {

  const [user , setUser ] = useState([])
  const [infRepos, setInfeRepos] = useState([])
  const [id , setId] = useState([])

  const pegar = async () =>{
    
    const nome = await fetch(`https://api.github.com/users/${user}/repos`)

    if(nome.status === 200){
      const nome02 = await nome.json()
      setInfeRepos(nome02.map((dados) => [dados.name , 
      dados['owner'].login,
      dados.html_url,
      dados.id
      ]))
    }else{
      alert('repositorio não existe')
    }
  }

  

  const remover = () =>{

    const newRepos = [...infRepos.map((dados) => dados)]

    setId(infRepos.map((dados03) => dados03[3]))

    for(let i = 0; i <= newRepos.length; i++){

      console.log(newRepos[i].indexOf(id[i]))
    }

  }
  

  return ( 
    <ContApp >
      <Herader />
      <ContInput >
          <InputButton user={user} setUser={setUser}/>
          <Button funct={pegar}/>
      </ContInput>
      {infRepos.map((dados) => 
      <Repos nome_repo={dados[0]}
      sub_nome={dados[3]}
      des_repo={dados[1]} 
      link={dados[2]} 
      functe={() => remover()}/>)}

    </ContApp>
  )
}

export default App
