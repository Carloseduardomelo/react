
import IProtudos from '@/model/protudos';
import { IconShoppingCart } from '@tabler/icons-react';
import Image from 'next/image';

interface IProtudosItemProps {
    protuto: IProtudos
}

const Protudo = (props: IProtudosItemProps) => {
    return (
        <div className={`w-full h-auto flex items-center justify-center flex-col gap-4 border border-zinc-400 p-1 rounded-[5px]`}>
            <img src={props.protuto.imagem} width={500} alt="ola mundo"  className={`rounded-[5px]`}/>
            <span className={`w-full flex items-center justify-between p-1`}><p className={`text-[23px]`}>{props.protuto.nome}</p><p className={`text-emerald-500`}>R$: {props.protuto.preco}</p></span>
            <p className={`w-full text-[15px] p-1`}>{props.protuto.descricao}</p>

            <button type="button"
            className={`w-full flex bg-violet-500 rounded-[5px] p-3 items-center justify-between`}>
                Comprar <IconShoppingCart />
            </button>
        </div>
    );
};

export default Protudo

