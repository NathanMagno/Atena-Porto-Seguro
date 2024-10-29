

interface ButtonProps
{
  titulo: string
  click: () => void;
}

export default function Button({titulo, click}:ButtonProps) {
  return (
    <>
         <button className="botao" onClick={click}>{titulo}</button>
    </>
  )
}