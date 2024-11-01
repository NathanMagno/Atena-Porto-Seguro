import  "../../app/styles/cadastro.css"

interface RodapeCadastroProps {
    link1: string
    link2: string
    nomeLink1: string,
    nomeLink2: string
  }
  
  
  export default function RodapeCadastro({ link1, link2, nomeLink1, nomeLink2 }: RodapeCadastroProps) {
    return (
      <>
        <footer className="RodapeLink">
          <nav>
            <ul className="ListaDesordenada">
              <li className="Li">{link1},{link2}</li>
              <li className="Li">{nomeLink1},{nomeLink2}</li>
            </ul>
  
          </nav>
  
        </footer>
  
      </>
    )
  }
