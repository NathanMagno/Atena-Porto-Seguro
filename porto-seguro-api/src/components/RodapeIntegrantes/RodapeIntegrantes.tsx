import { useRouter } from "next/navigation"
import Nuvem from "@/icons/icons8-nuvem-50.png"
import Image from "next/image";

export default function RodapeIntegrantes() {

  const nav = useRouter();

  const irHome = () => {
    nav.push('/')
  }

 const navegar = () => {
    return (
      window.open("https://github.com/Hitz299/Challenge-2sem/tree/front", "_blank")
    )

  }

  return (
    <>
       <footer className="RodapeIntegrantes">





        <div className="RepositorioContainer" onClick={navegar}>

          <p>Repositório Remoto</p>

          <Image alt="Icone de nuvem" src={Nuvem}/>
        </div>

        <nav>
          <p className="Li" onClick={irHome}>Página Inicial</p>
        </nav>


      </footer>


    </>
  )
}
