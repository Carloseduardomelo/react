import { useState } from "react"
import  Buton  from "./components/button"
import Input from "./components/inpu"

import { Container  , Contir , Row } from "./styld"

const App = () => {
  

  //! os useState são formas de armazenar e setar valores
  //!   variavel / setvalor da variavel
  const [number, setNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [opereito , setOpereito] = useState('')

  const limp = () => {
    setNumber('0')
    setFirstNumber('0')
    setOpereito('')
  };

  const handAdd = (num) => {
    setNumber(prev => `${prev === '0' ? ' ' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(number));
        setNumber('0')
        setOpereito('+')
    }else {
      const sum = Number(firstNumber) + Number(number);
      setNumber(String(sum))
      setFirstNumber('0')
      setOpereito('')
    }
  }

  const handleMUltNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(number));
        setNumber('0')
        setOpereito('*')
    }else {
      const sum = Number(firstNumber) * Number(number);
      setNumber(String(sum))
      setFirstNumber('0')
      setOpereito('')
    }
  }

  const handlMenusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(number));
        setNumber('0')
        setOpereito('-')
    }else {
      const sum = Number(firstNumber) - Number(number);
      setNumber(String(sum))
      setFirstNumber('0')
      setOpereito('')
    }
  }

  const handlDivNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(number));
        setNumber('0')
        setOpereito('/')
    }else {
      const sum = Number(firstNumber) / Number(number);
      setNumber(String(sum))
      setFirstNumber('0')
      setOpereito('')
    }
  }

  const handOpereito = () => {

    if(firstNumber !== '0' && opereito !== '' && number !== '0'){
        switch( opereito){
          case '+':
            handleSumNumbers()
            break
          case '*':
            handleMUltNumbers()
            break
          case '-':
            handlMenusNumbers()
            break
          case '/':
            handlDivNumbers()
            break
          default:
            break
        }
    }
  }

  return (
    <Container>
      <Contir>
        <Input value={number}/>
        <Row>
            <Buton title="C" onClick={() => limp()}/>
            <Buton title="*" onClick={() => handleMUltNumbers()}/>
            <Buton title="/" onClick={() => handlDivNumbers()}/>
            <Buton title="X"/>
          </Row>
          <Row>
            <Buton title="7" onClick={() => handAdd("7")}/>
            <Buton title="8" onClick={() => handAdd("8")}/>
            <Buton title="9" onClick={() => handAdd("9")}/>
            <Buton title="+" onClick={() => handleSumNumbers()}/>
          </Row>
          <Row>
            <Buton title="4" onClick={() => handAdd("4")}/>
            <Buton title="5" onClick={() => handAdd("5")}/>
            <Buton title="6" onClick={() => handAdd("6")}/>
            <Buton title="-" onClick={() => handlMenusNumbers()}/>
          </Row>
          <Row>
            <Buton title="1" onClick={() => handAdd("1")}/>
            <Buton title="2" onClick={() => handAdd("2")}/>
            <Buton title="3" onClick={() => handAdd("3")}/>
            <Buton title="=" onClick={() => handOpereito()}/>
          </Row>
      </Contir>
    </Container>
  )
}

export default App
