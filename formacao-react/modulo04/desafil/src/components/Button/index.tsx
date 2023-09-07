import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick , ok}: IButtonProps) => {
  return <ButtonContainer><button type="button" onClick={onClick} disabled={ok}>{title}</button></ButtonContainer>;
};

export default Button;
