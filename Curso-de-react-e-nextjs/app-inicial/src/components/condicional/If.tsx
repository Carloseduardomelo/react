interface Ifprops{
    teste: boolean
    children: any
}

export default function If(props:Ifprops){
        if(props.teste){
            return props.children
        }else{
            return null
        }
    }