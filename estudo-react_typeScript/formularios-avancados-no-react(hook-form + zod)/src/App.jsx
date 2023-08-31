import { useState } from 'react'
import './style/global.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import Nada from './pages'

const App = () => {

  const createUserForm = z.object({
    //! Aqui nos vamos fazer um estrutura de dados formicidos pelo data, que vai ser os dados dos inputs.

    email: z.string().nonempty('preencha o email por favor').email(),
    //! No campo de email vai nos retorna uma string ne, enmagina si não retornase ksksksk / aqui vamos meio que fazer uma tratamentos dos dados.
    //! O zod tambem permite que nos tambem possamos fazer algumas validações.
    //! O nonempty fazes que o input seja brigatorio, e tbm podemos passar uma menssagen caso não for preemcido EX: .nonempty("preencha o email pfv")
    //! O email ele pode verificar para nos si a dominio, os arobas etc..

    password: z.string().min(6 , 'coloque 6 caracteres') 
    //! mesma coisa de cima.
    //! O min ele vai fazer com que o usuario coloque pelo menos 6 caracteres, caso ele não coloque ele vai exibir uma mensagen passada min.
  })

  
  const [ output , setOutput ] = useState([])
  
  const { register , handleSubmit , formState: { errors } } = useForm({
    //? nos presizanos informa as regras para os inputs siguinas, para fazer isso vou mostra abaixo.
    //? para fazer isso nos temos que importar o zodResolverda @hookform/resolvers/zod
    
    resolver: zodResolver(createUserForm) //! com isso nos aplicamos todas as regras que criamos ali em cima no createUserform, para perceper isso basta clicar o button submit ele não vai enviar nada ele vai dar um foco no input de email ou na senha
    //? caso queira ver os erros nos temos que chamar o formStates, com ele chamado basta fazer um console.log(formState.erros)
    //? para melhor usabilidade nos fazemos outras destruturação do formState assim : formState: { errors } : e passamos em baixo de cade input isso : {irrors.email && <span> { errors.email.mensagens } </span> } a mesma coisa para o input de senha
  })
  //! resgiste vai sevir para registrar nossos campos
  
  const createUser = (data) => {
    //setOutput([JSON.stringify(data , null , 2)])
    
    setOutput(data)
  }

  function levar() {
      console.log(redirect('https://www.youtube.com/watch?v=XSbMSSdGSdg&t=5s'))
  }

  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">

      <form onSubmit={handleSubmit(createUser)} className="flex flex-col gap-4">

        <div className="flex flex-col gap-1">

            <label htmlFor="">emeil</label>
            <input 
            type="email" 
            id="emeil" 
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('email')} //! nos temos que passar isso para todos os inputs para fazer os registror, nesse caso não presizamos passar mais o name
            />

            {errors.email && <span>{errors.email.message}</span>
              //! temos um problela quando nos passamos errors e o . ele não mostra o email e men a senha para resolver isso vamos fazer o inf.
            } 
            
            
        </div>

        <div className="flex flex-col gap-1">

            <label htmlFor="">senha</label>
            <input 
            type="password" 
            id="password" 
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            {...register('password')} //! mesma coisa de cima kakakak
            />
            {errors.password && <span>{errors.password.message}</span>}
        </div>
            
        <button 
        type="submit"
        className="bg-emerald-400 rounded font-semibold text-white h-10 hover:bg-emerald-600" 
        onClick={levar()}>
          entre
        </button>


      {console.log(output.email)}
      </form>

    </main>
  )
}

export default App
