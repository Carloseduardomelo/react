
import { InputCont } from "./styld";


const Input = ({value}) => {

    return (
        <InputCont>
            <input type="text" value={value} 
            disabled/>
        </InputCont>
    )
}
export default Input