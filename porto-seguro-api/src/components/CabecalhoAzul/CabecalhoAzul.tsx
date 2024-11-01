import "../../app/styles/cadastro.css";

interface CabecalhoAzulProps {
  titulo: string
}

export default function CabecalhoAzul({titulo}:CabecalhoAzulProps) {
  return (
    <>
    <div className="CabecalhoAzul">
      <h1>{titulo}</h1>
    </div>
  </>
  )
}