import { useEffect, useState } from "react"

const ImgAlt = () => {

    const [ url , setUrl ] = useState('')
    const [ tema , setTema ]:any = useState('')

    const RondomImg = async ()  => {
        const dado = await fetch(`https://source.unsplash.com/random/800x600/?${tema}`)
        await setUrl(dado['url'])
    }
  
    useEffect(() =>{
        RondomImg()
    },[])
    
    return(
        <div className={` flex items-center justify-center flex-col gap-[30px]`}>
            <input type="text" onChange={event => setTema(event.target.value)}placeholder="tema" className={`w-[370px] h-[40px] flex items-center justify-center rounded-xl p-2 text-black`}/>
            <img src={url} alt="foto aleatoria" className={`w-[400px] rounded-[40px]`}/>
            <button type="button" className={`w-52 h-16 rounded-3xl p-3 text-yellow-500 bg-slate-50 flex items-center justify-center`} onClick={RondomImg}>gera uma imagen</button>
        </div>
    )
} 


export default ImgAlt