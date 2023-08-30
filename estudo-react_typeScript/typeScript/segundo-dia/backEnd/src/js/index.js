"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/protutos', (req, res) => {
    return res.send('meus protutos');
});
app.listen(3000, () => {
    console.log('sevidor rodando hahahah');
});
/*type liste = {
    name: string
    preco: number
}

const lista = { name: 'arros' , preco: 10 } satisfies liste

console.log(lista)
*/ 
