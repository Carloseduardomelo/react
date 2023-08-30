import express from "express"

const app = express()

app.get('/protutos' , (req , res) => {
    return res.send('meus protutos')
})

app.listen(3000 , () => {
    console.log('sevidor rodando hahahah')
})



/*type liste = {
    name: string
    preco: number
}

const lista = { name: 'arros' , preco: 10 } satisfies liste

console.log(lista)
*/