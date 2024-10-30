import { SlActionUndo } from "react-icons/sl";
import { Link } from "react-router-dom"

interface CabecalhoVerdeProps
{
  titulo: string
}

export default function CabecalhoVerde({titulo}: CabecalhoVerdeProps) {
    return (
        <>
        <header className="cabecalhoVerde">
            <div>
                <nav>
            <Link className="link" to = "/home">{SlActionUndo}</Link>
                </nav>
            
            </div>
            <h1>{titulo}</h1>
        </header>
        </>
    )
}