import { useEffect, useState } from "react"

const ImgAlt = () => {

    //! Esse compomente ele vai fazer um requisição a uma api de fotos aleatorias, com essas fotos nos vamos exibir elas e puchar mais fotos.

    const [ url , setUrl ] = useState<string>('') //! Aquie e que vai ficar a url da imgem que pegamos na api
    const [ tema , setTema ]= useState<string>('') //! aqui vai ficar o tema da imagem tem para nos bustar qualquer tema de imgaem

    //! Essa function ela vai ser responsavel para pegar a url da imagem da api, ela tbm vai ser uma function de onClick porque toda vez que eu clicar ele vai mim retornar uma imagem aleatoria url de imagem fornesida pela a  api comforme a tema 
    const RondomImg = async ()  => {
        const dado = await fetch(`https://source.unsplash.com/random/800x600/?${tema}`)
        await setUrl(dado['url'])
    }
  
    //! Esse useEffect vai ser responasvel para puchar a primeira url da img da api para cquando nos entra no page nao ter img para exibir na tela 
    useEffect(() =>{
        RondomImg()
    },[])
    
    return(
        <div className={` flex items-center justify-center flex-col gap-[30px]`}>
            {/*Esse input vai ser responsagel para pegar o tema das img e adicior no useState tema*/}
            <input type="text" onChange={event => setTema(event.target.value)}placeholder="tema" className={`w-[370px] h-[40px] flex items-center justify-center rounded-xl p-2 text-black`}/>
            {/*Essa img vai ser responsavel por mostrar a img que pegamos da api, no src dela pode percper que passamos o estato que possue a url da img*/}
            <img src={url} alt="foto aleatoria" className={`w-[400px] rounded-[40px]`}/>
            {/*Esse buton vai ser responsagel por trazer uma img aleatoria, ele faz isso chamando a function RondomImg pelo onlick*/}
            <button type="button" className={`w-52 h-16 rounded-3xl p-3 text-yellow-500 bg-slate-50 flex items-center justify-center`} onClick={RondomImg}>gera uma imagen</button>
        </div>
    )
} 


export default ImgAlt