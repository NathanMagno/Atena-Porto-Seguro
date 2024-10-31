import Image from "next/image";
import { useRouter } from "next/navigation";



export default function CabecalhoInicial() {



    const router = useRouter();

    const irConfigPerfil  = () => {
        router.push("./minha/conta");
    };



  return (
    <>


      <header className="CabecalhoVerde">
        <Image src="/logo-portoseguro.webp" alt="Logo da Porto Seguro"    width={300} quality={100} 
                height={50} />
        <Image className="cursor-pointer" onClick={irConfigPerfil} src="/icons8-usuário-homem-com-círculo-50.png" alt="Perfil"     width={50}  
                height={50} / >
      </header>

    </>
  )
}