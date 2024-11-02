import { ButtonHTMLAttributes } from "react";


interface ButtonProps
{
  titulo: string
  click: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];

}

export default function Button({titulo, click, type}:ButtonProps) {
  return (
    <>
         <button className="botao" onClick={click} type={type}>{titulo}</button>
    </>
  )
}