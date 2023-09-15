
import IProtudos from '@/model/protudos';
import { IconShoppingCart } from '@tabler/icons-react';
import Image from 'next/image';

interface IProtudosItemProps {
    protuto: IProtudos

    /* Aqui são as tipagem dos parametros de vamos usar no compomente, essa tipagem nos criamos no: model/protudos.tsx 
    nessa tipagem que pegamos de model/protudos.tsx vai ter a estrutura do um produto vai ter como: name , id e nomey
    */
}

const Protudo = (props: IProtudosItemProps) => {
    //! esse compomente ele pega as informação tipadas do props e exibe elas
    //todo: obs: não essei explicar direito ese compomente.
    return (
        <div className={`w-full h-auto flex items-center justify-center flex-col gap-4 border border-zinc-400 p-1 rounded-[5px]`}>
            {/*Nessa parte nos pegamos as informações que veio do props e exibimos na tela */}
            <img src={props.protuto.imagem} width={500} alt="ola mundo"  className={`rounded-[5px]`}/>
            <span className={`w-full flex items-center justify-between p-1`}><p className={`text-[23px]`}>{props.protuto.nome}</p><p className={`text-emerald-500`}>R$: {props.protuto.preco}</p></span>
            <p className={`w-full text-[15px] p-1`}>{props.protuto.descricao}</p>
            {/*Esse button  com a intemção de fazer um carrinho de compra. */}
            {/*NÂO FIZ */ }
            <button type="button"
            className={`w-full flex bg-violet-500 rounded-[5px] p-3 items-center justify-between`}>
                Comprar <IconShoppingCart />
            </button>
        </div>
    );
};

export default Protudo

