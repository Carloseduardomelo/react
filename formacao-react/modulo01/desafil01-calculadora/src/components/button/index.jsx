/* eslint-disable react/prop-types */
import { ButCont } from "./styld";
const Buton = ({title, onClick}) => {

    return (
        <ButCont onClick={onClick}>
            {title}
        </ButCont>
    );
};
export default Buton;
