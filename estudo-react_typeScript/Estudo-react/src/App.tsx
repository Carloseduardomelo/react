import User from "./components/User"

type Dados = {
  name: string,
  id: string
}

function App() {

  const dados: Dados = {
    name: 'carlos',
    id: '1'
  }


  return (
    <>
      <User name={dados.name} id={dados.id}/>
    </>
  )
}

export default App
