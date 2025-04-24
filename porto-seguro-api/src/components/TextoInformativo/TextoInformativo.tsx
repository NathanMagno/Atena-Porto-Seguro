

interface TextoInformativoProps 
{
    texto: string;
}

export default function TextoInformativo({texto}: TextoInformativoProps) {
  return (
    <>
    
        <div className="Centraliza">

            <p className="Texto">{texto}</p>

        </div>
    
    </>
  )
}