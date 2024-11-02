import { useRouter } from "next/navigation";
import  "../../app/styles/cadastro.css"

interface RodapeCadastroProps {
    link1: string
    link2: string
    nomeLink1: string,
    nomeLink2: string
  }
  
  
  export default function RodapeCadastro({ link1, link2, nomeLink1, nomeLink2 }: RodapeCadastroProps) {


      const router = useRouter();
    
      const navegarLink1 = () => {
        router.push(link1);
      };

      const navegarLink2 = () => {
        router.push(link2);
      };

    return (
      <>
        <footer className="RodapeLink">
          <nav>
            <ul className="ListaDesordenada">
              <li className="Li"><p onClick={navegarLink1}>{nomeLink1}</p></li>
              <li className="Li"><p onClick={navegarLink2}>{nomeLink2}</p></li>
            </ul>
  
          </nav>
  
        </footer>
  
      </>
    )
  }
  