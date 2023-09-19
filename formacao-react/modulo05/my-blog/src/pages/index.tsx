
import useApi from '@/Hooks/useApi'
import Container from '@/components/context'
import Hearder from '@/components/hearder'

import { SetStateAction, useEffect, useState } from 'react'

const App = () => {

  const {id, inf , setId } = useApi()

  function nada(id02: SetStateAction<number>){
    setId(id02)
  }

  return (
    <div className={`w-screen h-screen flex items-center justify-center flex-col gap-11 m-0 `}>
      <Hearder />
      {inf.map((a) => <Container title={a['title']} descrition={a['descripton']} created_at={`${a['created_at']}`} link={`/${id}`}  onClick={() => nada(a['id'])}/>)}
    </div>
  )
}

export default App